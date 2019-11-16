FROM node:13

EXPOSE 3000

WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .

RUN yarn install
RUN yarn add http-server

COPY ./dist ./

CMD ["npx", "http-server", "./"]
# CMD ["yarn", "start"]
