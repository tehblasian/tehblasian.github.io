FROM node as builder
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.15.2-alpine
COPY --from=builder /usr/src/app/build /var/www
COPY --from=builder /usr/src/app/assets /var/www/assets
COPY --from=builder /usr/src/app/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
