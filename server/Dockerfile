FROM node:10.16.3

RUN mkdir /srv/groupq/server && chown node:node /srv/groupq/server

USER node

WORKDIR /srv/groupq/server

COPY --chown=node:node package.json package-lock.json ./

RUN npm install --quiet

# TODO: Can remove once we have some dependencies in package.json.
RUN mkdir -p node_modules