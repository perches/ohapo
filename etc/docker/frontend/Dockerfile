# build-stage
FROM node:12.7.0-alpine as build-stage

WORKDIR /app
COPY ./frontend/package.json ./frontend/yarn.lock ./frontend/webpack* ./
RUN yarn install
COPY ./frontend/ ./
RUN yarn build

CMD ["yarn", "build", "-d", "--watch"]

# production-stage
FROM nginx:1.13.12-alpine as production-stage

ENV LANG=en_US.UTF-8
COPY --from=build-stage /app/dist /var/www/html
COPY ./etc/docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./etc/docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
