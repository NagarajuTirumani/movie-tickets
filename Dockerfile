FROM ngnix:alpine:3.23

EXPOSE 80

COPY . /usr/share/nginx/html/