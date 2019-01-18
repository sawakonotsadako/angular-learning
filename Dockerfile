FROM nginx:latest
## Remove default nginx website
## RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY nginx.conf /etc/nginx
COPY /dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]