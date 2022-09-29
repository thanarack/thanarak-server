FROM node:alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app

RUN yarn install

COPY . /app

COPY .env.production /app/.env

RUN yarn build

EXPOSE 80

CMD ["yarn", "start"]
