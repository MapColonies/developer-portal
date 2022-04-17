## Container base
from node:alpine

## Container labels
label docker_docsify_version_major="4"
label docker_docsify_version_minor="4"
label docker_docsify_version_patch="4"
label docker_docsify_version_revision="1"
label docker_docsify_version="4.4.4.1"

## Container setup
run npm install -g docsify-cli@latest

COPY entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh

WORKDIR ./

COPY . .

## Container dnvironment variables
env PORT 4000
env DOCSIFY_VERSION latest
env NODE_VERSION alpine

## Container runtime configuration
expose 4000

CMD ["docsify", "serve", "docs", "--port" ,"4000"]