# ToDo SPA
___
This is a basic ToDo Single Page App.
The app is a monorepo containing Frontend and Backend.
#### Frontend:
- TypeScript
- Vite
- React
- Tailwind CSS
#### Backend
- TypeScript
- Express
- Prisma + Postgres
___

## Table of Contents

- [Features](#features)
- [Get Started](#get-started)
- [ToDo](#todo)

___

## Features

- Frontend
- Backend

___

## Getting Started

### Development

#### Requirements
- [Node.js](https://nodejs.org/en/download) >= 22.12.0
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

#### Installation
```sh
### BE+FE Packages
npm run install
```

##### Copy .env file
```sh
  cp .env.example .env
```
- Alter .env vars


#### Run in Docker
For local FS Development with Hot Reload
>FrontEnd:  http://localhost:5173/
>BackendEnd:  http://localhost:3000/

```sh
## Initialize DB. Run Once 
  docker compose run backend npx prisma migrate dev --name init
  
```

```sh
  
## Run Docker-Compose
  docker compose up --build
```

___

## ToDo
- [ ] Initialize
    - [x] Git
    - [ ] Docker
      - [x] compose
      - [x] Run FE
      - [x] Run BE
      - [x] Run DB
- [ ] Frontend
  - [x] Vite
  - [ ] ts 
    - [x] ts aliasing
  - [x] prettier 
  - [ ] Design
      - [ ] add tailwind
  - [ ] Error Handling
- [ ] Backend
  - [x] ts
  - [x] prettier
  - [x] Prisma + Postgres
  - [ ] Router
    - [x] init
  - [ ] Tasks Controller && Repo
  - [ ] CRUD
  - [ ] Error Handling
- [ ] Describe API endpoints
