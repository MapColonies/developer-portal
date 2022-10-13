FROM node:18.7.0-alpine

RUN apk update && apk add git zip dumb-init

WORKDIR /app

COPY ./package*.json ./
RUN npm ci
RUN npm run build

ENV NODE_ENV=production

RUN npm ci

COPY ./docs ./docs
COPY ./entrypoint.sh ./

RUN chmod +x ./entrypoint.sh
RUN mkdir -p ./classified_repo
RUN chmod g+rwx -R ./docs ./classified_repo
RUN chgrp -R node ./docs ./classified_repo

USER node
EXPOSE 8080

ENTRYPOINT ["./entrypoint.sh"]
CMD ["dumb-init", "npm", "run", "start:prod"]
