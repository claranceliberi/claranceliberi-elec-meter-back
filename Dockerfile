FROM node:17

WORKDIR /app

COPY package.json /app/package.json

RUN yarn install

COPY . /app

CMD [ "yarn","start:debug"]