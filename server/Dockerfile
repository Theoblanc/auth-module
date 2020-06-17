FROM node:10.15.0

RUN mkdir backend
WORKDIR /backend

COPY . /backend/
RUN yarn && yarn cache clean --force

CMD yarn dev