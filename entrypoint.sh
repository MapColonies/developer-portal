#!/bin/sh

echo cloning from repo $CLASSIFIED_REPO_URL

REPO_NAME=classified_repo

git clone $CLASSIFIED_REPO_URL $REPO_NAME
\cp -r /$REPO_NAME/docs/. /docs/
\cp -r /$REPO_NAME/docs/assets/images/. /docs/assets/images

ENV_SERVICES_NAMES=$(printenv | grep SERVICE_URL= | cut -d'=' -f1)

for f in $(find /docs/ -name "*.md"); 
    do
        for serviceName in $ENV_SERVICES_NAMES;
            do 
                sed -i "s|<$serviceName>|$(printenv $serviceName)|" "$f";
        done
 done

rm -r /$REPO_NAME

exec "$@"
