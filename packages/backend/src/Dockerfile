# BE Dev Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY . .
RUN npm install
RUN npx prisma generate

EXPOSE 3000

CMD ["npx", "ts-node-dev", "--respawn", "--transpile-only", "src/index.ts"]
