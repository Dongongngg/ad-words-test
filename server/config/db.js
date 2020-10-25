module.exports = {
  // HOST: "db",
  // PORT: 3306,
  HOST: "localhost",
  PORT: 3333,
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
