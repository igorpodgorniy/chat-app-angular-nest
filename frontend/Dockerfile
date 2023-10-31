# syntax=docker/dockerfile:1

# Specify Node version
# Name image "development"
FROM node:20 AS development

# Specify working directory inside container
WORKDIR /igorp/frontend/src/app

# Copy package.json and package-lock.json from host to inside container working directory
COPY package*.json ./

# Install dependencies inside container
RUN npm install
RUN npm isntall -g @angular/cli@16.2.0

# Bundle App Sources
COPY . .

RUN npm run build

EXPOSE 4200
