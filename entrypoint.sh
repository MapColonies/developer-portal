#!/bin/sh

echo 'cloning from private repo'
# TODO: Figure out how to correctly access the private repo from the running container.
# here im using github private access token with the correct scopes to authenticate, but it will not hold up on diff environments.
# Should we use k8s secrets to store SSH keys for the git authentication?
# - We should also replace templates inside the .md files with real data (from env?, should we use helm? or just a k8s configMap?)

git clone https://{private_access_token}:@github.com/MapColonies/docs-test.git
cp -a /docs-test/docs/. /docs/
rm -r /docs-test

exec "$@"