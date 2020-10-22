const db = require("../models/");

const Setting = db.setting;

//insert
exports.create = (req, res) => {
  const setting = {
    browser: req.body.browser,
  };

  Setting.create(setting)
    .then((data) => {
      res.send({
        success: true,
        data: data,
      });
    })
    .catch((err) => {
      res.status(400).send({
        success: false,
        message: err.message,
      });
    });
};

//Select all
exports.getAll = (req, res) => {
  Setting.findAll()
    .then((data) =>
      res.send({
        success: true,
        data: data,
      })
    )
    .catch((err) =>
      res.status(400).send({
        success: false,
        message: err.message,
      })
    );
};
