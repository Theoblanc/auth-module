# Dockerfile
FROM node:12.14.1

RUN mkdir frontend

WORKDIR /frontend


COPY . /frontend/

RUN yarn && yarn cache clean --force

EXPOSE 3000

CMD ["yarn", "start"]




