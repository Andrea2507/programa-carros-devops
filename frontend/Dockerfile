FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM base AS dev
EXPOSE 3000
CMD ["npm", "start"]

FROM base AS build
RUN npm run build

FROM nginx:alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
