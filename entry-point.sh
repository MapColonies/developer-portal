#!/bin/sh

grep -rl "https://CATALOG_APPLICATION_URL.com" /usr/share/nginx/html/ | xargs sed -i "s@https://CATALOG_APPLICATION_URL.com@$CATALOG_APPLICATION_URL@g"
grep -rl "https://YAHALOM_APPLICATION_URL.com" /usr/share/nginx/html/ | xargs sed -i "s@https://YAHALOM_APPLICATION_URL.com@$YAHALOM_APPLICATION_URL@g"
grep -rl "https://PUZZLE_URL.com" /usr/share/nginx/html/ | xargs sed -i "s@https://PUZZLE_URL.com@$PUZZLE_URL@g"
grep -rl "https://PLAYGROUND_URL.com" /usr/share/nginx/html/ | xargs sed -i "s@https://PLAYGROUND_URL.com@$PLAYGROUND_URL@g"
# The site posts to its own origin; nginx forwards to the collector, which browsers can't reach.
if [ -n "$TELEMETRY_COLLECTOR_URL" ]; then
  cat > /etc/nginx/telemetry.conf <<EOF
location = /otel/v1/traces {
    limit_except POST { deny all; }
    client_max_body_size 16k;
    proxy_pass $TELEMETRY_COLLECTOR_URL;
}
EOF
  TELEMETRY_URL=/otel/v1/traces
else
  TELEMETRY_URL=
fi
grep -rl "https://TELEMETRY_URL.com" /usr/share/nginx/html/ | xargs sed -i "s@https://TELEMETRY_URL.com@$TELEMETRY_URL@g"

exec "$@"
