#!/bin/sh

echo cloning from repo $CLASSIFIED_REPO_URL

whoami

REPO_NAME=classified_repo
cd $REPO_NAME

git clone $CLASSIFIED_REPO_URL .
\cp -r /$REPO_NAME/docs/. /docs/
\cp -r /$REPO_NAME/docs/assets/images/. /docs/assets/images

# Create examples zip
cd /docs/assets/examples
zip -r examples ./* 

cd /

echo "Preparing vars"

ENV_TEMPLATE_VALUES=$(printenv | grep 'SERVICE_URL=\|API_KEY=\|EMOJI_CODE=' | cut -d'=' -f1)

for f in $(find /docs/ -type f \( -name "*.js" -o -name "*.html" -o -name "*.md" \)); 
    do
        echo "Working on file "$f 
        for value in $ENV_TEMPLATE_VALUES;
            do 
                echo "Applying sed to file"
                sed -i "s|<$value>|$(printenv $value)|" "$f";
        done
 done

# rm -r /$REPO_NAME

echo "Running start command"
exec "$@"
