FROM node

WORKDIR /app

COPY backend/package.json /app

RUN yarn 

COPY . /app