---
name: review-docs
description: Review developer-portal docs (a PR or specific files) by running the documented flow or examples against a live environment (prod by default) and the services' source code, and reporting where the docs, the deployment, the code, or the environment disagree. Use for "review docs PR N", "check these docs hold up against the real services", or "/review-docs".
argument-hint: "<docs PR number | doc paths> [--env <name>, default prod] [--deploy-pr <owner/repo#N>] [--source <owner/repo@ref>]"
---

# Review docs against live services

The docs are the spec. The goal is to verify that a reader following them, step by step, gets
what the docs promise from the real services, and that the docs are well written. Three
sources must agree: the **docs**, the **live** deployment, and the services' **code**.

Helper: `python3 .claude/tools/docrev/docrev.py` (`docrev` below). It does the
mechanical parts; you do the judgment. Run `docrev <cmd> -h` for flags.

## 0. Ask first

At activation, ask in one message (skip what the arguments already answer):
1. **Environment**: prod (default; readers use prod) or another env. Data that exists only in
   prod (e.g. a product record) is checked against prod; its absence in dev is not a finding.
2. **What to compare**: docs ↔ live, docs ↔ code, or both (default both).
3. **Code**: confirm the repo and ref per service from `docrev sources` (section 2), or take
   the ones the user names (a branch or PR for docs that run ahead of the deployment).
4. **Deployment PR**, if the docs belong to one.

During the run, ask instead of choosing whenever docs, live and code disagree and it isn't
clear which one states the intent.

## 1. Scope

- Docs PR: `gh pr view <N> --json files,headRefName,baseRefName` and take changed
  `docs/**/*.md(x)` and `static/openapi/**`. Read files from the PR head without switching the
  user's branch: `git fetch origin pull/<N>/head:docrev-pr-<N>` then
  `git show docrev-pr-<N>:<path>` into `.claude/review-runs/pr-<N>/` (or a detached worktree of
  the head, so `links`/`refs` see the whole site; they check the checkout the given docs live
  in, wherever docrev itself runs from). Pass `--run pr-<N>` to `call`/`pod-call`
  (or set `DOCREV_RUN`) so saved responses land in that run's dir.
- Deleted or renamed docs: on the head, `docrev refs <old path> --ref <base>` lists what still
  points at the old URL, id or file name (docs, `sidebars.js`, `src/`, site config). Review a
  `sidebars.js` diff too: every id it adds must exist.
- Deployment PR (optional, e.g. helm-charts): `gh pr diff` it. Deployment findings are
  anchored to its files/lines.
- Files that are pure reference (profile tables, enum lists) are still in scope: compare them
  with what the live service returns in the flows that touch them.
- OpenAPI specs (`static/openapi/**`, rendered by redocusaurus): `docrev openapi <spec>` lists
  the operations; fetch the spec the service serves (often `/openapi.json` or `/api-docs`) and
  `docrev openapi <spec> --live <saved>` to diff paths, params and version; call the read
  operations. A spec the service no longer matches is a doc finding.

## 2. Environment

- Config: `~/.claude/review-envs/<env>.yaml` (outside the repo: it holds internal hostnames and
  this repo is public). It maps entry-point placeholders
  (`<DEM_CATALOG_SERVICE_URL>`) to URLs, the route that should serve each one, access mode
  (`route` or `forward`), and where the token comes from. It never holds the token itself.
  ```yaml
  name: <env>
  namespace: <ocp namespace>
  token: {env: DOCREV_TOKEN_<ENV>, param: token}   # or {file: ~/path}; add header: x-api-key to also send it as a header (header alone: header only)
  headers: {x-user-id: <value>}                   # sent on every request; also fills `<x-user-id>` in docs
  read_posts: ['/search/', '/route$']             # POST paths the user confirmed have no side effects
  read_only: true                                 # e.g. prod: docrev refuses writes even with --allow-write
  cluster: false                                  # e.g. prod: docrev never runs oc (no env discover/forward/pod-*) for this env's namespaces
  hosts: [other.example]                          # our hosts reached only via chained links; `call` sends nothing elsewhere (localhost only via this env's forwards)
  insecure: true                                  # self-signed dev certs
  ca_file: ~/path/chain.pem                       # instead of insecure, when a server omits its intermediate
  placeholders:
    DEM_CATALOG_SERVICE_URL:
      url: https://<public host>/<path>
      route: <route name>
      access: forward                             # route | forward
      forward: {service: <svc>, port: 8080, local_port: 18081, path: /<path>}
      namespace: <other ns>                       # only when this entry is served outside `namespace`
      aliases: [dem_catalog_url]                  # other spellings pages use for the same entry point
  ```
  Placeholder names match case- and `-`/`_`-insensitively (`<RASTER-CATALOG-SERVICE_URL>` ≡
  `{RASTER_CATALOG_SERVICE_URL}`); add `aliases` only for different names. Add a path to
  `read_posts` only after the user confirms it is read-only.
- No config yet: `docrev env discover --namespace <ns> [--release <r>]`, propose a config
  from it, get the user's confirmation, then write it. For prod, ask the user for the public
  URLs and token source instead; its config always has `read_only: true` and `cluster: false`.
- **Prod is read-only and public-only**: public routes and the reader's token, nothing else.
  No `--allow-write`, forwards, `pod-read`/`pod-call`, or other cluster access. To localise a
  prod mismatch, reproduce it on a lower env where those are allowed, and say so in the report.
- Every run: `docrev env check <env>`. Each item is an **env** finding (unadmitted route and who
  holds it, no ready endpoints behind the route that actually serves each URL or behind the
  forward service, missing token; for `cluster: false` envs, an unreachable entry point). If an
  entry's route is broken, use `access: forward` for this run (tell the user) and `docrev env forward <env>`.
- **Network down**: `env check` or `call` reporting `network unreachable (VPN?)` / `(DNS)` is
  this machine, not the env. Stop and ask the user to reconnect; don't wait out timeouts or
  retry in a loop. If live access can't be restored, continue against the code only, mark
  every live check unverified, and say so at the top of the report.
- Token missing: ask the user; tell them which env var the config expects. Never write a
  token into a file in the repo or echo it into the report.
- Stop forwards at the end: `docrev env stop <env>`.
- **Code**: `docrev sources --chart <helm chart dir>` (or `--image NAME:VERSION`) maps each
  deployed component to its GitHub repo and release tag. `kind: image` entries carry the code
  version that runs (an image tag in values overrides the chart's version; an image without one
  gets the owning subchart's template default, explained in `note`, which needs the subchart
  vendored by `helm dependency build`); `kind: chart` is the packaging version. `declared_in`
  lists the values key paths (e.g. `values.yaml:geoserver-wcs.image`). Show the mapping and get
  it confirmed; name-guessed repos come back `confirmed: false`, unmatched ones with
  `candidates` to ask about. For one run, `--repo NAME=owner/repo` sets a mapping and
  `--accept NAME` confirms a guess. Confirmed mappings go in
  `~/.claude/review-envs/sources.yaml` (`<component>: <owner/repo>`); then `--fetch`
  shallow-clones them into `.claude/review-runs/src/`. Use the version that runs in the
  reviewed env (prod's chart values, not the PR head), unless the user names another ref.

## 3. Classify each doc

`docrev extract <doc> --no-content` returns headings (with `step` numbers), tabs, and blocks
with line numbers, each classified by its `role` (`request`, `request-body`, `example-response`,
`endpoint`, `template`, `diagram`, else the code language, e.g. `xml`, or `code`).

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
`extract` recognises curl, bare/multi-line KVP URLs, `POST Request` / `url:` / `body:` blocks (the
label may also sit on the line above the fence), and
XML/JSON bodies whose endpoint is named in the prose just above (`endpoint_from_prose: true`;
check it picked the right one). A `request-body` block has no endpoint nearby: build the curl
yourself and pipe it: `echo "curl ..." | docrev call <env>`; a long body can sit in a file
(`-d @body.xml`, or `--data-binary @body.xml` to keep newlines, as curl does), and is
classified by its root element (`GetRecords` reads, `Transaction` writes). A path-only request
(`/route?...`) needs `--base <VALHALLA_URL>`. A `template` block (e.g. `curl --request <http_method>`) is
syntax, not a request to run.

- **Chaining (flows)**: fill each step's inputs from earlier responses, the way a reader
  would: `--sub <doc value>=<real value>`. E.g. `coverageId=srtm30-DTM` → the real
  coverage id derived from the catalog record / GetCapabilities; `<WCS_SERVICE_URL>` → the
  `WCS_BASE` link of the chosen record. Record where each value came from. If a step's input
  can't be obtained from earlier output the way the doc says, that is a finding (the flow is
  broken), even if you can still run the step with a value from elsewhere.
- **Illustrative values are not findings.** IDs, product names, coordinates, and dates in the
  docs are examples; replace them with real ones and move on. Only the *shape* and
  *derivation rule* must hold (e.g. "the id looks like `<productId>-<productType>`" is a
  claim; check it against real ids).
- **Placeholders** like `<SRS_IDENTIFIER>` / `[COORD1_X]`: fill with valid values derived from
  earlier responses (e.g. a polygon inside a record's footprint).
- **"Follow link X" steps** have no request block: build the request from the link the doc
  says to take from the chosen record (`echo "curl '<link>'" | docrev call <env>`); if the
  record has no such link, the flow breaks at that step.
- **Environment-specific config is not a doc finding**: size limits, timeouts, hostnames,
  counts. Note the observed value; flag only if the doc's *behaviour* claim is wrong (e.g. the
  error format or status differs).
- **Safety**: `call` refuses writes (`safety: write`: non-read POST/PUT/PATCH/DELETE). Show
  the user the exact request and run with `--allow-write` only after they say yes, per request.
  For downloads/large files use `--range 1024` (or `--head`) instead of fetching the file.
  To check a "no token needed" claim, re-run with `--no-auth`. `call` adds the env's token when
  the request lacks one and reports `token_added: true`. Example requests (curl, URLs) leave the
  token out by convention; the page states once, with a link to the Authentication page, that
  every request needs one. Only a page with no such note is a doc finding (re-run with
  `--no-auth` to confirm the service needs it). A token in a request example is a doc finding
  too. Client code (Cesium, viewer URLs) keeps `<token>`, since copied code must work.
  `access: forward` also reroutes a `--sub` to the public URL; add `--no-forward` to test the public route.
- **Success** is not just HTTP 200: an `ows:ExceptionReport` (OGC services often return it
  with 200), an empty result where the doc implies results, or a missing link the next step
  needs are failures.

## 5. Compare

For each step/example, check against the doc:
- Request works as written (after substituting real values).
- Response structure matches the doc's example response:
  `docrev shape-diff <doc>:<example line> <saved response> [--under <element>]`. Values may
  differ; element/key paths, attributes and link schemes the reader relies on may not. Works
  for any XML/JSON API; `--under` aligns a doc snippet with a full response.
- Prose claims: defaults ("default interpolation is linear"), optional/required parameters,
  accepted id forms, error messages/status, "save X for step N" actually being needed/usable.
- Reference pages (catalog profiles, enums) vs fields actually returned/queryable:
  `docrev profile-diff <doc> --response <saved record> [--previous <previous version doc>]`
  lists documented-but-not-returned, returned-but-undocumented and case mismatches, and with
  `--previous` checks the 🆕/✏️/🗑️ markers (the site convention: a marker column with a legend;
  a page that marks changes only in prose is a doc finding). A field missing from one record may just be empty
  there; check another before calling it a finding. Try filtering on newly documented fields.
- Placeholders: `docrev placeholders <docs...>`. Site notation is `<UPPER_SNAKE>` (the token is
  `<token>`), `[UPPER_SNAKE]` inside XML (where `<NAME>` reads as an element), and `{...}` only
  for URL template variables the reader keeps (`{TileMatrix}`, `{z}`). Each reported placeholder
  is a doc finding; put changes for pages the PR doesn't touch in the report, not inline. It also
  reports `token in a request example`; skip the Authentication page and client URLs (e.g. a
  viewer's `token=` parameter), which show the token on purpose.
- Writing: typos, wrong API names in client snippets, inconsistent names across pages,
  empty table cells. Links: `docrev links <docs...>` resolves internal URLs, relative files,
  static assets and anchors (the site builds with `onBrokenLinks: warn`, so nothing else catches them).

### Content that isn't a request

- Client-library snippets (Cesium, OpenLayers, Leaflet): check API names and constructor
  usage against the library version the page names, and that values the snippet uses (URLs,
  tokens, coordinates) match earlier steps. Mark it unverified unless you ran it.
- Prose-only pages: writing, links and consistency with other pages only.
- Screenshots: compare what they show (names, fields, versions) with the text and live
  responses; a stale screenshot is a doc finding.
- Embedded playgrounds (`PlaygroundFrame`): check the URL they load and its parameters.
- Async steps ("wait for the callback"): poll a status endpoint if the doc gives one;
  otherwise mark the step unverified.

### Against the code

For each claim the docs make (endpoints, parameters and defaults, fields and enums, link
types, error formats, limits), find where the code defines it: route/handler tables, OpenAPI
or schema files, profile/mapping files, config defaults, validation. Read, don't run.
- Docs and code disagree, live agrees with code: doc finding.
- Docs and live agree, code disagrees (e.g. the code at the deployed tag changed it): the
  deployed version isn't the reviewed ref; report it, don't guess which is right.
- Live differs from both: deployment finding (config or version drift); give the version
  running and the ref read.
- A claim with no code behind it (a field nothing writes, a parameter nothing reads) is a
  finding even if live happens to return something.

Open `saved` response files when the summary isn't enough; don't dump them into the chat.

## 6. Report

Each finding has: **kind**, location, one-line statement, evidence (request as run with
`<token>` redacted, status, key response detail).

| Kind | Meaning | Goes to |
|---|---|---|
| doc | docs wrong/unclear/broken vs the real service | docs PR inline comment |
| deployment | service/chart behaviour contradicts the docs (the spec) | deployment PR (if given), else report |
| code | the service's code contradicts the docs or what runs live | report (and the service repo, if the user asks) |
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
