## Base ########################################################################
# Use a larger node image to do the build for native deps (e.g., gcc, python)
FROM node:20-alpine3.16 as base

# Reduce npm log spam and colour during install within Docker
ENV NPM_CONFIG_LOGLEVEL=warn
ENV NPM_CONFIG_COLOR=false

# We'll run the app as the `node` user, so put it in their home directory
WORKDIR /home/node/app
# Copy the source code over
COPY --chown=node:node . /home/node/app/

## Development #################################################################
# Define a development target that installs devDeps and runs in dev mode
FROM base as development
WORKDIR /home/node/app
# Install (not ci) with dependencies, and for Linux vs. Linux Musl (which we use for -alpine)
RUN npm install
# Switch to the node user vs. root
USER node
# Expose port 3000
EXPOSE 3000
# Start the app in debug mode so we can attach the debugger
CMD ["npm", "start"]

## Production ##################################################################
# Also define a production target which doesn't use devDeps
FROM base as production
WORKDIR /home/node/app
COPY --chown=node:node --from=development /home/node/app/node_modules /home/node/app/node_modules
# Build the Docusaurus app
ENV PLAYGROUND_URL=https://PLAYGROUND_URL.com
ENV PUZZLE_URL=https://PUZZLE_URL.com
ENV CATALOG_APPLICATION_URL=https://CATALOG_APPLICATION_URL.com
RUN npm run build

## Deploy ######################################################################
# Use a stable nginx image
FROM nginxinc/nginx-unprivileged:1.24.0-alpine3.17 as deploy
WORKDIR /home/node/app
USER root

COPY ./entry-point.sh /docker-entrypoint.d/init-urls.sh
RUN chmod +x /docker-entrypoint.d/init-urls.sh

# Copy what we've installed/built from production
COPY --from=production /home/node/app/build /usr/share/nginx/html/
RUN chmod -R g+w /usr/share/nginx/html/
