#!/bin/sh

echo cloning from repo $CLASSIFIED_REPO_URL

git clone $CLASSIFIED_REPO_URL
\cp -r /docs-test/docs/. /docs/
\cp -r /docs-test/assets/images/. /docs/assets/images

ENV_SERVICES_NAMES=$(printenv | grep SERVICE_URL= | cut -d'=' -f1)

for f in $(find /docs/ -name "*.md"); 
    do
        for serviceName in $ENV_SERVICES_NAMES;
            do 
                sed -i "s|<$serviceName>|$(printenv $serviceName)|" "$f";
        done
 done

rm -r /docs-test

exec "$@"
