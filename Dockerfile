FROM node:22 AS build

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install 

COPY . ./
RUN ["pnpm", "run", "build"]

FROM nginxinc/nginx-unprivileged:stable-alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
# COPY nginx/host.conf /etc/nginx/conf.d/default.conf
