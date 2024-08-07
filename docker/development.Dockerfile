FROM node:21 AS build
WORKDIR /app
COPY . ./
COPY package*.json ./
RUN npm install 
RUN npm run build

FROM nginx:latest AS runtime
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .

COPY ../nginx/development-nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 84
CMD ["nginx", "-g", "daemon off;"]
