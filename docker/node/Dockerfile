##########################
## Builder Container
##########################
FROM node:21.4.0-alpine3.17 as builder

WORKDIR /sample-vite

COPY package.json package-lock.json ./

RUN npm i --no-progress

COPY . .

RUN npm run build

##########################
## Application Container
##########################
FROM node:21.4.0-alpine3.17

WORKDIR /sample-vite

COPY --from=builder /sample-vite ./

CMD ["npm", "run", "start"]
