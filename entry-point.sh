#!/bin/sh

grep -rl "https://CATALOG_APPLICATION_URL.com" /usr/share/nginx/html/ | xargs sed -i "s@https://CATALOG_APPLICATION_URL.com@$CATALOG_APPLICATION_URL@g"
grep -rl "https://YAHALOM_APPLICATION_URL.com" /usr/share/nginx/html/ | xargs sed -i "s@https://YAHALOM_APPLICATION_URL.com@$YAHALOM_APPLICATION_URL@g"
grep -rl "https://PUZZLE_URL.com" /usr/share/nginx/html/ | xargs sed -i "s@https://PUZZLE_URL.com@$PUZZLE_URL@g"
grep -rl "https://PLAYGROUND_URL.com" /usr/share/nginx/html/ | xargs sed -i "s@https://PLAYGROUND_URL.com@$PLAYGROUND_URL@g"

exec "$@"
