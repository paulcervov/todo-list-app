# Todo List App

This project is part of the [Todo List](https://github.com/paulcervov/todo-list) project.

## Setup and run 

1. `git clone https://github.com/paulcervov/todo-list-app.git && cd todo-list-app`

2. `cp .env .env.development.local`

3. fill `.env.development.local` file

### Local development

`npm run start`

### Local production build

`npm run build`

### Local production run

`serve -s build`

See all [available scripts](https://create-react-app.dev/docs/available-scripts).

### Docker production build

`docker build -t todo-list-app .`

### Docker production run

```
docker run \
--name todo-list-app --rm \
-dp 80:80 \
todo-list-app 
```

See all [base commands](https://docs.docker.com/engine/reference/commandline/docker/).
