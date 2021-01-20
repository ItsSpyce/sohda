FROM node:14-alpha

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 80

ENTRYPOINT ["yarn", "start"]