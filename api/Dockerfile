# syntax=docker/dockerfile:1

# Specify Node version
# Name image "development"
FROM node:20 AS development

# Specify working directory inside container
WORKDIR /igorp/src/app

# Copy package.json and package-lock.json from host to inside container working directory
COPY package*.json ./

# Install dependencies inside container
RUN npm install

# Bundle App Sources
COPY . .

RUN npm run build

EXPOSE 3000

##### PRODUCTION #####
# Build another imega named production
FROM node:20 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set wor directory
WORKDIR /igorp/src/app

COPY --from=development /igorp/src/app .

EXPOSE 3000

# Run app
CMD [ "node", "dist/main" ]