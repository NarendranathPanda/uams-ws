FROM node:8.11.1

RUN mkdir -p /usr/src/app/uams/

RUN chmod -R 777 /usr/src/app/uams/

COPY package.json /usr/src/app/uams/package.json

WORKDIR /usr/src/app/uams

RUN npm install

ADD ./ /usr/src/app/uams
    
EXPOSE 8080

ENTRYPOINT ["npm", "start"]

