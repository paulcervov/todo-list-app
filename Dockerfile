FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN npm ci --production && \
npm i -g serve && \
npm run build
EXPOSE 80
CMD serve -s build -l tcp://0.0.0.0:80
