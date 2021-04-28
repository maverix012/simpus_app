FROM node as build
WORKDIR /app
COPY package.json ./
COPY . .
RUN yarn install && yarn run build

FROM nginx as prod-stage
COPY --from=build /app/dist /usr/share/nginx/html
COPY prod.conf /temp/prod.conf
RUN envsubst /app < /temp/prod.conf > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD [ "nginx","-g","daemon off;" ]
