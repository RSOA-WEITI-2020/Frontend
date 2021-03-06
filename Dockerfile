FROM node:10-alpine as builder

COPY package.json package-lock.json ./
RUN npm install && mkdir /app-ui && mv ./node_modules ./app-ui

WORKDIR /app-ui

COPY . .

# TODO: update environments/environment.prod.ts with valid urls

RUN npm run ng build -- --prod

FROM nginx:alpine

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app-ui/dist/rosa-frontend /usr/share/nginx/html

EXPOSE 4200 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]