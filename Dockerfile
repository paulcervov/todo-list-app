FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN npm ci --production && npm i -g serve
EXPOSE 80
CMD npm run build && serve -s build -l tcp://0.0.0.0:80
