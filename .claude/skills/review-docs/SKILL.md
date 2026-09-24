---
name: review-docs
description: Review developer-portal docs (a PR or specific files) by running the documented flow or examples against a live environment (e.g. OCP dem-dev) and reporting where the docs, the deployment, or the environment disagree. Use for "review docs PR N against <env>", "check these docs hold up against the real services", or "/review-docs".
argument-hint: "<docs PR number | doc paths> --env <name> [--deploy-pr <owner/repo#N>]"
---

# Review docs against live services

The docs are the spec. The goal is to verify that a reader following them, step by step, gets
what the docs promise from the real services, and that the docs are well written.

Helper: `python3 .claude/skills/review-docs/scripts/docrev.py` (`docrev` below). It does the
mechanical parts; you do the judgment. Run `docrev <cmd> -h` for flags.

## 1. Scope

- Docs PR: `gh pr view <N> --json files,headRefName` and take changed `docs/**/*.md(x)`.
  Read files from the PR head without switching the user's branch:
  `git fetch origin pull/<N>/head:docrev-pr-<N>` then `git show docrev-pr-<N>:<path>`
  into `.claude/review-runs/pr-<N>/`.
- Deployment PR (optional, e.g. helm-charts): `gh pr diff` it. Deployment findings are
  anchored to its files/lines.
- Files that are pure reference (profile tables, enum lists) are still in scope: compare them
  with what the live service returns in the flows that touch them.

## 2. Environment

- Config: `~/.claude/review-envs/<env>.yaml` (outside the repo: it holds internal hostnames and
  this repo is public). It maps entry-point placeholders
  (`{DEM_CATALOG_SERVICE_URL}`) to URLs, the route that should serve each one, access mode
  (`route` or `forward`), and where the token comes from. It never holds the token itself.
  ```yaml
  name: <env>
  namespace: <ocp namespace>
  token: {env: DOCREV_TOKEN_<ENV>, param: token}   # or {file: ~/path}
  insecure: true                                  # self-signed dev certs
  placeholders:
    DEM_CATALOG_SERVICE_URL:
      url: https://<public host>/<path>
      route: <route name>
      access: forward                             # route | forward
      forward: {service: <svc>, port: 8080, local_port: 18081, path: /<path>}
  ```
- No config yet: `docrev env discover --namespace <ns> [--release <r>]`, propose a config
  from it, get the user's confirmation, then write it.
- Every run: `docrev env check <env>`. Each item is an **env** finding (unadmitted route and who
  holds it, service without ready endpoints, missing token). If an entry's route is broken,
  use `access: forward` for this run (tell the user) and `docrev env forward <env>`.
- Token missing: ask the user; tell them which env var the config expects. Never write a
  token into a file in the repo or echo it into the report.
- Stop forwards at the end: `docrev env stop <env>`.

## 3. Classify each doc

`docrev extract <doc> --no-content` returns headings (with `step` numbers), tabs, and blocks
(`request`, `example-response`, `diagram`, ...) with line numbers.

- **Flow**: numbered steps where later steps use output of earlier ones (`kind_hint: flow` is
  a hint, confirm by reading). Review the structure as well as the requests:
  step numbering is consistent between headings, diagram, and in-text references; every
  step's inputs are produced by an earlier step or clearly stated as a prerequisite; the
  diagram's edges match what actually feeds what.
- **Examples**: independent snippets (e.g. a protocol page listing requests). Each example
  stands alone; a failure affects only that example.
- Mixed pages (e.g. Step 1 with tabs of alternative filters): the tabs are alternatives
  within a step; run each, chain from the one the doc says to continue with (or the first
  that returns results).

## 4. Execute

Run requests in document order with `docrev call <env> --doc <file> --block <line>`.
Requests that aren't curl or bare URLs (e.g. an XML body under "POST Request url: ...") —
build the curl yourself and pipe it: `echo "curl ..." | docrev call <env>`.

- **Chaining (flows)**: fill each step's inputs from earlier responses, the way a reader
  would: `--sub <doc value>=<real value>`. E.g. `coverageId=srtm30-DTM` → the real
  coverage id derived from the catalog record / GetCapabilities; `{WCS_SERVICE_URL}` → the
  `WCS_BASE` link of the chosen record. Record where each value came from. If a step's input
  can't be obtained from earlier output the way the doc says, that is a finding (the flow is
  broken), even if you can still run the step with a value from elsewhere.
- **Illustrative values are not findings.** IDs, product names, coordinates, and dates in the
  docs are examples; replace them with real ones and move on. Only the *shape* and
  *derivation rule* must hold (e.g. "the id looks like `<productId>-<productType>`" is a
  claim; check it against real ids).
- **Placeholders** like `[COORD1_X]` / `{SRS_IDENTIFIER}`: fill with valid values derived from
  earlier responses (e.g. a polygon inside a record's footprint).
- **Environment-specific config is not a doc finding**: size limits, timeouts, hostnames,
  counts. Note the observed value; flag only if the doc's *behaviour* claim is wrong (e.g. the
  error format or status differs).
- **Safety**: `call` refuses writes (`safety: write`: non-read POST/PUT/PATCH/DELETE). Show
  the user the exact request and run with `--allow-write` only after they say yes, per request.
  For downloads/large files use `--range 1024` (or `--head`) instead of fetching the file.
- **Success** is not just HTTP 200: an `ows:ExceptionReport` (OGC services often return it
  with 200), an empty result where the doc implies results, or a missing link the next step
  needs are failures.

## 5. Compare

For each step/example, check against the doc:
- Request works as written (after substituting real values).
- Response structure matches the doc's example response: root element, element names
  (`summary.element_names`), link schemes, attributes the doc tells the reader to use. Values
  may differ; names and structure may not.
- Prose claims: defaults ("default interpolation is linear"), optional/required parameters,
  accepted id forms, error messages/status, "save X for step N" actually being needed/usable.
- Reference pages (catalog profiles, enums) vs fields actually returned/queryable. Try
  filtering on newly documented fields.
- Writing: typos, wrong API names in client snippets, inconsistent names across pages,
  empty table cells, broken internal links/anchors (check the anchor exists).

Open `saved` response files when the summary isn't enough; don't dump them into the chat.

## 6. Report

Each finding has: **kind**, location, one-line statement, evidence (request as run with
`<token>` redacted, status, key response detail).

| Kind | Meaning | Goes to |
|---|---|---|
| doc | docs wrong/unclear/broken vs the real service | docs PR inline comment |
| deployment | service/chart behaviour contradicts the docs (the spec) | deployment PR (if given), else report |
| env | this environment only (route conflict, pod down, token) | report only |
| unverified | couldn't run (write declined, blocked upstream) | report only |

Deployment vs doc: the docs are the spec. If the service contradicts a documented behaviour,
it's a deployment finding unless the doc is clearly the one in error (typo, invalid syntax
for the protocol). When genuinely unsure, ask the user instead of choosing.

Output:
1. Terminal report: verdict per doc (flow holds / breaks at step N / examples x of y pass),
   then findings grouped by kind, most severe first.
2. Draft inline comments per PR in `.claude/review-runs/<run>/comments-<repo>-<N>.md`:
   `path:line` + a concise comment (no preamble, reference code instead of pasting it).
3. Post only after the user approves, via `gh api` review comments on the PR head commit.
