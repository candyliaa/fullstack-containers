FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV MONGO_URL=mongodb://the_username:the_password@localhost:3456/the_database REDIS_URL=http://localhost:6378

CMD npm start