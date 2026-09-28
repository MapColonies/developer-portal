# Recipes

Learned notes per service kind, written by `generate-docs` after it documents a service. A
recipe is a head start, never a substitute for discovery: everything in it is re-verified live.

This repo is public. Recipes hold only generic, verified knowledge: no internal hostnames,
namespaces, tokens, credentials, or product data.

Format (`<kind>.md`, kind = protocol or product, e.g. `ogc-csw-pycsw`):

```markdown
# <kind>
Match: <how to recognise it — image name pattern, endpoint, response root>
Self-description: <where the service describes itself>
Declared intent lives in: <config/code files, in the chart or the image>
Reader flow: <typical steps and what each step hands to the next>
Gotchas: <verified pitfalls>
Docs: <existing pages that use it, as templates>
```
