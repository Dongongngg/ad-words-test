const db = require("../models/");

const Setting = db.setting;

//Insert one
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

//Select one by id
exports.getOneById = (req, res) => {
  Setting.findByPk(req.params.id)
    .then((data) => {
      if (data === null) {
        res.send({
          success: false,
          message: "No results found by this query",
        });
      } else {
        res.send({
          success: true,
          data: data,
        });
      }
    })
    .catch((err) =>
      res.status(400).send({
        success: false,
        message: err.message,
      })
    );
};
