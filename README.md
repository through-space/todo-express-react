# ToDo SPA
___
This is a basic ToDo Single Page App.
The app is a monorepo containing Frontend and Backend.

*Currently, only a dev build running in Docker is available.*
___

## Table of Contents

- [Features](#features)
- [Get Started](#getting-started)
- [Tech Stack](#tech-stack)
- [ToDo](#todo)

___

## Features
  - Tasks List
  - Task Creation
  - Task Update

___


## Getting Started

### Development

Use these instructions to Develop and Run the project locally

#### Requirements
- [Node.js](https://nodejs.org/en/download) >= 22.12.0
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

#### Installation

##### .env
Copy and alter .env file `🚩 REQUIERED_FOR_RUNNING`

```sh
  cp .env.example .env

```
*Next step is necessary only for local development*
```sh
  ### BE+FE Development Packages
  npm run install
```

#### 🚩 Running in Docker

For local FS Development with Hot Reload.

| |                                                  |
|---|--------------------------------------------------|
| FrontEnd | [http://localhost:5173/](http://localhost:5173/) |
| BackEnd   | [http://localhost:3000/](http://localhost:3000/) |


```sh

  
  ## Run BE & FE in in Docker
  docker compose up --build

  ## Initialize DB by running dockerized BE 
  ## ❗️Run Once
  docker compose run --rm backend npx prisma migrate dev --name init
  ## Further Migrations
  docker compose run backend npx prisma migrate dev --build  --name status
```

___
## Tech Stack

|          |                                                      |
|----------|------------------------------------------------------|
| FrontEnd | `Node.js` `TypeScript` `Vite` `React`                |
| Backend  | `Node.js` `TypeScript` `Express` `Prisma` `Postgres` |
| Platform | `Docker`                                             |

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
    - [ ] updated-at
  - [ ] Error Handling
- [ ] Remove ToDos
- [ ] Remove console.log
- [ ] Describe API endpoints
