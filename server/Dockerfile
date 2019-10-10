FROM node:10.16.3

RUN mkdir /srv/groupq && chown node:node /srv/groupq

USER node

WORKDIR /srv/groupq

COPY --chown=node:node package.json package-lock.json ./

RUN npm install --quiet

# TODO: Can remove once we have some dependencies in package.json.
RUN mkdir -p node_modules