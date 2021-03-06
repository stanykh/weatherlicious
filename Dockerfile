FROM node:8

# Create app directory
WORKDIR /usr/tmp/weatherlicious

COPY package*.json ./

RUN npm install

COPY . /usr/tmp/weatherlicious

EXPOSE 8080
CMD [ "npm", "start" ]