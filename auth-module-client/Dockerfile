# Dockerfile
FROM node:12.9

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app


COPY yarn.lock /app
COPY package.json /app

RUN yarn && yarn cache clean --force

COPY . /usr/src/app

EXPOSE 3000

CMD ["yarn", "start"]
