module.exports = {
  HOST: "localhost",
  //db
  PORT: 3333,
  //3306
  USER: "root",
  PASSWORD: "666666",
  DB: "ad_words",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
