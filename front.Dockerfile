FROM node

WORKDIR /app

COPY frontend/package.json /app

COPY ./frontend /app