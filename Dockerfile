FROM node:15-alpine AS base

WORKDIR /app

COPY . .

RUN npm install

FROM node:15-alpine AS prod

COPY --from=base /app ./

RUN npm i -g nodemon

EXPOSE 5001

CMD ["nodemon", "app.js"]



