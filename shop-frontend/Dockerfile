# FROM node:18
# WORKDIR /app
# COPY package.json package.json
# RUN npm install
# COPY . .
# EXPOSE 8080
# ENTRYPOINT bash

FROM node:16
WORKDIR /app
COPY . .
EXPOSE 8080
ENTRYPOINT npm start
