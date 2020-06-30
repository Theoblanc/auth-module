FROM node:10.15.0

RUN mkdir server
WORKDIR /server

COPY . /server/
RUN yarn && yarn cache clean --force

CMD yarn dev