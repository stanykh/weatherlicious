FROM node:8

# Create app directory
WORKDIR /usr/tmp/weatherlicious

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8088
CMD [ "npm", "start" ]