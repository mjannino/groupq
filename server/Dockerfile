FROM mhart/alpine-node:12
EXPOSE 3000 9229

# create application directory on image
WORKDIR /opt/app/server 

# copy package and package-lock.json
COPY package*.json ./

RUN npm ci

# bundle app source

COPY . .

CMD ./scripts/start.sh