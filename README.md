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

## Get Started

### Development

#### Requirements
- [Node.js](https://nodejs.org/en/download) >= 22.12.0
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

#### Copy .env file
```sh
cp .env.example .env
```
- Alter .env vars

#### Full Stack
```sh

```

#### Frontend Only
```sh
# Build & start
cd packages/frontend 
npm install
npm run dev

# Docker with Hot Reload
docker build -t todo-frontend .
npm run frontend-docker 

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
  - [ ] Prisma + Postgres
  - [ ] Router
  - [ ] Error Handling
