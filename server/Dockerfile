FROM node:13.12.0

RUN mkdir backend
WORKDIR /backend

COPY . /backend/
RUN npm install && npm cache clean --force

EXPOSE 4000
CMD npm run dev