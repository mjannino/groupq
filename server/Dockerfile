FROM mhart/alpine-node:12

# create application directory on image
WORKDIR /opt/src/app 

# copy package and package-lock.json
COPY package*.json ./

RUN npm install

# bundle app source

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]