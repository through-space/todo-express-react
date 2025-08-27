# ToDo SPA
___
This is a basic ToDo Single Page App.
The app is a monorepo containing Frontend and Backend.

*Currently, only a dev build running in Docker is available.*
___

## Table of Contents

- [Features](#features)
- [Get Started](#getting-started)
- [API Endpoints](#api-endpoints)
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

##### Git
```sh
  git clone git@github.com:through-space/todo-express-react.git
```

##### .env
Copy and alter .env file `🚩 REQUIERED_FOR_RUNNING`

```sh
  cd todo-express-react
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
  ## Run & Rebuild in Docker
  docker compose up --build
```

Prisma Initialization & Migration

```sh
  ## Initialize DB by running dockerized BE 
  ## ❗️Run Once
  docker compose run --rm backend npx prisma migrate dev --name init
  ## Further Migrations
  docker compose run backend npx prisma migrate dev --build --name <migration-name>
```

___
## API Endpoints

| Method | Endpoint          | Description                                 | Success Code | Error Codes           |
| ------ | ----------------- | ------------------------------------------- | ------------ | --------------------- |
| GET    | `/api/tasks`      | Returns list of all tasks                   | 200          | —                     |
| GET    | `/api/tasks/{id}` | Returns a single task by id                 | 200          | 404 (not found)       |
| POST   | `/api/tasks`      | Creates a new task, returns Location header | 201          | —                     |
| PUT    | `/api/tasks/{id}` | Updates **all fields** of a task            | 200          | 400 (validation), 404 |
| PATCH  | `/api/tasks/{id}` | Updates only the **status** field           | 200          | 400 (validation), 404 |
| DELETE | `/api/tasks/{id}` | Deletes a task                              | 204          | 404 (not found)       |

___

## Tech Stack

|          |                                                      |
|----------|------------------------------------------------------|
| FrontEnd | `Node.js` `TypeScript` `Vite` `React`                |
| Backend  | `Node.js` `TypeScript` `Express` `Prisma` `Postgres` |
| Platform | `Docker`                                             |

___

## ToDo
- [x] Initialize
    - [x] Git
    - [x] Docker
      - [x] compose
      - [x] Run FE
      - [x] Run BE
      - [x] Run DB
- [ ] Frontend
  - [x] Vite
  - [x] ts 
    - [x] ts aliasing
  - [x] prettier 
  - [x] Task List
  - [x] Task Form
    - [x] Form Basic Functionality
    - [ ] Show validation errors
  - [x] Design
      - [x] add tailwind
  - [ ] Error Handling
  - [ ] Save Button Disable
- [ ] Backend
  - [ ] Restrict update fields / check updated_at
  - [ ] CRUD breakdown to files
  - [x] ts
  - [x] prettier
  - [x] Prisma + Postgres
  - [x] Router
    - [x] init
  - [x] Tasks Controller && Repo
  - [x] CRUD
    - [x] updated-at
  - [ ] Error Handling
- [x] Remove ToDos
- [x] Remove console.log
- [x] Describe API endpoints
- [x] Add Github repo + readme instructions
- [ ] Tests
