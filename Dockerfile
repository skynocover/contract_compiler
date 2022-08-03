FROM node:16.16-slim

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start:prod" ]