FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

FROM node:20

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 3001

ENV NODE_ENV=production

CMD ["node", "index.js"]