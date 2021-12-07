FROM node AS build
WORKDIR /app
COPY package.json package-lock.json ./
COPY src ./src
COPY public ./public
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm install && npm run build
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]