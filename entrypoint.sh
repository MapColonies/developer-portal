#!/bin/sh

echo cloning from repo $CLASSIFIED_REPO_URL

whoami

CLASSIFIED_REPO_PATH=/app/classified_repo
cd $CLASSIFIED_REPO_PATH

git clone $CLASSIFIED_REPO_URL .
\cp -r $CLASSIFIED_REPO_PATH/docs/. /app/docs/
\cp -r $CLASSIFIED_REPO_PATH/docs/assets/images/. /app/docs/assets/images

# Create examples zip
cd /app/docs/assets/examples
zip -r examples ./*

cd /

ENV_TEMPLATE_VALUES=$(printenv | grep 'SERVICE_URL=\|API_KEY=\|EMOJI_CODE=\|INJECTION_TYPE=' | cut -d'=' -f1)

for f in $(find /app/docs/ -type f \( -name "*.js" -o -name "*.html" -o -name "*.md" \));
    do
        for value in $ENV_TEMPLATE_VALUES;
            do
                sed -i "s|<$value>|$(printenv $value)|" "$f";
        done
 done

# rm -r /$CLASSIFIED_REPO_PATH

# some terminal debug time
# sleep 10m

cd /app

echo "Running start command"
exec "$@"
