FROM nginx:1.13-alpine

ENV APP_PATH /app
ENV PATH $APP_PATH/node_modules/@angular/cli/bin/:$PATH

RUN apk add --update --no-cache nodejs && mkdir $APP_PATH && rm -rf /etc/nginx/conf.d/*
RUN mkdir -p /usr/src/app && chmod -R 777 /usr/src/app

COPY package.json /usr/src/app/Customer-GUI/package.json
WORKDIR /usr/src/app/Customer-GUI
RUN npm config set registry http://artifactory-espoo1.ext.net.nokia.com/artifactory/api/npm/npmjs-remote/ && npm install 

COPY ./ /usr/src/app/Customer-GUI
WORKDIR /usr/src/app/Customer-GUI
RUN npm run build-prod

CMD ["npm","start"]
