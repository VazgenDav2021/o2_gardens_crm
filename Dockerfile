FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:18-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/public ./public
COPY --from=build /app/src ./src
COPY --from=build /app/config ./config
COPY --from=build /app/favicon.png ./favicon.png

RUN mkdir -p public/uploads

EXPOSE 1337

CMD ["npm", "run", "start"]
