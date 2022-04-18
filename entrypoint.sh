#!/bin/sh

echo 'cloning from private repo'
git clone https://{private_access_token}:@github.com/MapColonies/docs-test.git
cp -a /docs-test/docs/. /docs/
rm -r /docs-test

exec "$@"