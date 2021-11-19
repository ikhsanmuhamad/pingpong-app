FROM node:alpine

WORKDIR /src/pingpong-app/
COPY . /src/pingpong-app/

RUN npm install

CMD npm start
