---
name: generate-docs
description: Generate or update developer-portal docs from a deployment change (e.g. a helm-charts PR or a new service version) or from source code before it is deployed, for any service or domain. Discovers what changed and how the services work from code and the live deployment, checks they agree, proposes a change plan, then writes pages and opens a draft docs PR. Use for "document <deployment PR>", "generate docs for the new <service> version", "draft docs from <repo> branch X", or "/generate-docs".
argument-hint: "<owner/repo#N deployment PR | owner/repo@ref> [--env <name>, default the dev env running the change] [--namespace <ns>] [--release <r>]"
---

# Generate docs from a deployment change

Docs are the spec readers build against, so what gets documented is the **declared intent**
of the change (chart diff, config, the service's own self-description and code), **verified
live**. Where intent and live behaviour disagree, document the intent and report the mismatch
as a deployment finding. Never bake a deployment bug into the docs.

Three sources must agree: the **code**, the **live** deployment, and the **docs** you write.
Code comes first for docs that run ahead of a deployment (early docs keep the work on track);
live checks follow as soon as the change runs somewhere.

Nothing here is specific to one domain or protocol. Discover each time; use recipes only as a
head start.

Helper: `python3 .claude/tools/docrev/docrev.py` (`docrev` below; `docrev <cmd> -h`).
Environment setup (config in `~/.claude/review-envs/`, `env check`, `env forward`, token
handling) is the same as in the `review-docs` skill, section 2. Follow it.

## 0. Ask first

At activation, ask in one message (skip what the arguments already answer):
1. **Source of the change**: a deployment PR, a code ref (repo + branch/tag/PR), or both.
2. **Where it runs**: the env with the change deployed (default: the dev env the deployment
   PR targets), or **none yet** (code-only: docs are drafted from code and marked unverified).
3. **Code repos**: confirm the repo and ref per component from `docrev sources`.
4. **Prod check**: after verifying on the dev env, compare with prod (default yes; read-only,
   public routes only, as in `review-docs` section 2). What prod lacks is reported as "not in
   prod yet", not as a finding; data that only prod holds is checked there.

During the run, ask instead of choosing whenever code, live and the existing docs disagree
and the intent isn't clear.

## 1. What changed

- `docrev deploy-diff --pr <owner/repo#N>`: new/modified files, added image/tag/route/
  dependency keys with line numbers. Read the diff itself for config files it lists
  (profiles, mappings, service config): those usually carry the intent.
- `docrev inventory --namespace <ns> --release <r>`: what is actually running (images, ready
  replicas), exposed (routes, admission), and configured (configmaps) for the release.
- Code: `docrev sources --chart <chart dir>` maps each component to its repo and tag; for a
  code ref, diff it against the version currently deployed/documented
  (`gh api repos/<owner/repo>/compare/<deployed tag>...<ref>`, then read the files that
  matter). Code-only runs start here.
- Build a list of **changed capabilities**, each tied to evidence: a new service or API
  version, new/removed fields, new endpoints or operations, new link types, changed auth,
  changed limits. Ignore pure infra changes (resources, replicas, probes) unless they alter
  behaviour a client sees.

## 2. Discover each service

For every service behind a changed capability:

1. `recipes/` — if a recipe matches (by image name, protocol, or API style), read it first.
2. Self-description, the way a client would find it (try, don't assume):
   OpenAPI/Swagger (`/openapi.json`, `/swagger.json`, `/api-docs`, `/docs`), OGC
   `GetCapabilities` / `DescribeRecord` / `DescribeFeatureType` / `GetDomain`, `OPTIONS`,
   HAL/JSON:API links, GraphQL introspection, index pages. Use `docrev call` for every request.
3. Declared configuration and code: config files from the chart diff; the service's source at
   the confirmed ref (`docrev sources ... --fetch`): route/handler tables, OpenAPI or schema
   files, profile/mapping definitions, config defaults, validation; files inside the
   running image via `docrev pod-read` (never on prod) (profile/schema definitions, route tables, mapping
   files). `pod-read` masks obvious secrets; still never copy credentials, internal hostnames,
   or tokens into docs, recipes, or chat.
4. Existing docs for the same service/domain (`docs/**`): the previous version's pages are the
   template and the baseline for "what's new".

## 3. Code vs live (vs prod)

For each capability, compare what the code and declaration say with what the service does,
using structure rather than values:

- `docrev shape-diff <declared> <live> [--under <element>]`, where either side can be a
  saved response, a file, or a doc block (`doc.md:LINE`). E.g. the previous version's doc
  example vs a live response shows what's new/removed; the new profile's declared fields vs a
  live record shows whether the deployment actually serves them.
- Try the new capability the way a reader would (filter on a new field, follow a new link
  type, call a new operation). A declared field that can't be queried, a link type that never
  appears, an operation that errors — each is a **deployment finding**.
- Localise every mismatch hop by hop before naming a cause: public route → proxy → backend.
  Query the backend directly (`docrev pod-call`, bypasses routes/proxies/auth) and compare
  with the same request through the route; check what each hop actually mounts/loads
  (`pod-read`, the Deployment's volumes), not only what the ConfigMaps say. Service logs
  often state the cause outright (e.g. an undefined DB column). Treat a restart as a test of
  a hypothesis, and re-run `env forward` afterwards (forwards die with their pod).
- Before posting a cause, it must be verified; an unverified hypothesis goes out as a
  question, not a finding.
- The code at the deployed tag and the code ref you document can differ: say which one each
  statement in the docs comes from, and report a live/code mismatch with both versions.
- Code-only (nothing deployed yet): derive examples from the code (schemas, handlers, tests,
  fixtures), mark each page's examples unverified in the plan and the PR body, and re-run
  this section once the change is deployed.
- Prod (if asked in section 0): run the same read flow there. Capabilities that aren't live
  yet are "not in prod yet"; anything else that differs is a deployment finding.
- Walk the intended reader flow end to end (search → metadata → data, or whatever the service
  implies), chaining values between steps exactly as `review-docs` section 4 describes,
  including its safety rules (writes only with per-request approval; downloads via `--range`).

## 4. Change plan (stop for approval)

Present before writing anything:
- Pages to create/update, each with its template page (sibling or previous version) and what
  it gets: new sections/steps, table rows with change markers, example requests/responses.
- The reader flow per guide page, as the step list it will have.
- Deployment findings (code/intent vs live mismatches) with evidence; these are reported,
  not documented as behaviour. What is verified live, what only from code, and what prod
  doesn't have yet.
- Open questions you can't settle from evidence. Ask; don't pick.

Wait for the user to approve or adjust.

## 5. Write

In a new worktree/branch off the default branch (don't touch the user's working tree):
- Mirror the template page's structure, front matter, tags, admonitions, tabs, and diagram
  style. Add new pages to `sidebars.js` next to their siblings.
- Examples: placeholders follow the site notation (`<SERVICE_URL>`, `<token>`; `[NAME]` inside
  XML; `{...}` only for URL template variables), checked with `docrev placeholders`;
  responses are captured live, trimmed to what the reader needs, with internal hostnames
  replaced by placeholders. Where live output contradicts intent (a deployment finding),
  write the example from the intent and leave an HTML comment in the page naming the
  finding so reviewers see it.
- Reference tables (fields, enums, parameters) come from the declaration; mark changes vs the
  previous version the way existing pages do.
- Keep prose short: step purpose, what to take from the response for the next step, gotchas
  found during discovery.

## 6. Verify and open the PR

- Run the `review-docs` procedure on the new/changed pages against the same env and code refs
  (code-only: against the code only). Fix doc
  findings; keep deployment/env findings for the report.
- `npm run build` must pass with no broken link/anchor warnings for the new pages (the site
  config only warns, so read the output).
- Open a **draft** PR (Conventional Commits title, `docs(<domain>): ...`). Body: capabilities
  documented, reader flows, verification result per page, deployment findings with links to
  the deployment PR lines. No pasted code; reference paths.

## 7. Learn

If this service kind had no recipe, or the recipe was wrong/incomplete, add or update
`recipes/<kind>.md` (format in `recipes/README.md`). Include only what is generic and
verified; no internal hostnames, namespaces, tokens, or product data.
