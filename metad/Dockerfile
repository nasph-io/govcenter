FROM strapi/base

ARG PROXY_HTTP
ARG PROXY_HTTPS
ARG PROXY_NO

ENV http_proxy $PROXY_HTTP
ENV https_proxy $PROXY_HTTPS
ENV no_proxy $PROXY_NO

WORKDIR /usr/app

COPY ./package.json ./
COPY ./yarn.lock ./

# FROM node:14.17.0
RUN yarn install --ignore-engines

COPY . .

ENV NODE_ENV production

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]
