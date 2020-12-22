# Todo List App

This project is part of the [Todo List](https://github.com/paulcervov/todo-list) project.

## Setup and run local

1. `git clone https://github.com/paulcervov/todo-list-app.git && cd todo-list-app`

2. `cp .env .env.development.local`

3. fill `.env.development.local` file

4. `npm run start`

See all [available scripts](https://create-react-app.dev/docs/available-scripts).

### Setup and run with Docker

1. `git clone https://github.com/paulcervov/todo-list-app.git && cd todo-list-app`

2. `cp .env .env.production`

3. fill `.env.production` file

4. ```
    docker run \
    --name todo-list-app --rm \
    -dp 80:80 -w /app \
    -v $(pwd)/package.json:/app/package.json \
    -v $(pwd)/package-lock.json:/app/package-lock.json \
    -v $(pwd)/src:/app/src \
    -v $(pwd)/public:/app/public \
    -v $(pwd)/build:/app/build \
    --env-file $(pwd)/.env.production \
    node:lts-alpine sh -c "npm ci --production && \
        npm run build && \
        npm i -g serve && \
        serve -s build -l tcp://0.0.0.0:80"
    ```
5. `docker logs -f todo-list-app`

See all [base commands](https://docs.docker.com/engine/reference/commandline/docker/).

