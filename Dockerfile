FROM node:18-alpine

WORKDIR /app
RUN apk add --no-cache yarn

COPY package.json yarn.lock ./
RUN yarn install

COPY . ./
RUN ["yarn", "run", "build"]
CMD ["yarn", "run", "start"]
