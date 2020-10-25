# Configurator

**_db connection config file_**: server/config /db.js
**_db modals_**: server/models/AdWordsConfig/setting.model.js
**_routes_**: server/route/settings.js
uri (with proxy:"http://localhost5000"):

- getAll "/api/settings/"
- Add "/api/settings/"
- getById "/api/settings/:id"

**_controller_**: server/controllers/setting.controller.js
**_axios API_**: client/src/modules/API/settings.js

## Tech

React | Material UI | Express | Sequelize | NodeJS | MySQL | Docker

## Front-end dev start

At client folder:

```shell
npm install
npm start
```

http://localhost:3000

## Back-end dev start

At root folder:

```shell
docker-compose up
```

http://localhost:5000

##

Made by Jingfu Dong.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
