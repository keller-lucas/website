FROM node:latest AS build
LABEL authors="lucas"

WORKDIR /usr/local/website

COPY ./ /usr/local/website

RUN npm install
RUN npm run build --prod


FROM nginx:latest

COPY --from=build /usr/local/website/dist/website/browser /usr/share/nginx/html

EXPOSE 80
