FROM node:10.16.3

RUN mkdir /srv/groupq && mkdir /srv/groupq/client && chown node:node /srv/groupq/client

USER node

WORKDIR /srv/groupq/client

COPY --chown=node:node package.json ./

RUN npm install

# TODO: Can remove once we have some dependencies in package.json.
RUN mkdir -p node_modules