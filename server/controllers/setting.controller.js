const db = require("../models/");

const Setting = db.setting;

//  Insert one
exports.create = (req, res) => {
  const setting = {
    browser: req.body.browser,
    incognito: req.body.incognito,
    wait_target_time: req.body.wait_target_time,
    visit_within: req.body.visit_within,
    visit_from_page: req.body.visit_from_page,
    visit_to_time: req.body.visit_to_time,
    complete_wait_time: req.body.complete_wait_time,
    no_sites_max: req.body.no_sites_max,
    no_sites_wait_time: req.body.no_sites_wait_time,
    reset_after: req.body.reset_after,
    device_reset: req.body.device_reset,
    vinn_reset: req.body.vinn_reset,
    phone_reset: req.body.phone_reset,
    mobile_reset: req.body.mobile_reset,
    fly_mode: req.body.fly_mode,
    remove_cookies: req.body.remove_cookies,
    change_resolution: req.body.change_resolution,
    mouse_tracks: req.body.mouse_tracks,
    data_saving: req.body.data_saving,
    random_generate: req.body.random_generate,
    analytics_protection: req.body.analytics_protection,
    remove_history: req.body.remove_history,
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

//  Select all
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

//  Select one by id
exports.getOneById = (req, res) => {
  Setting.findByPk(req.params.id)
    .then((data) => {
      if (data === null) {
        res.send({
          success: false,
          message: "No results found by this id.",
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

//  Update one by id
exports.updateOneById = (req, res) => {
  Setting.findByPk(req.params.id)
    .then((data) => {
      if (data === null) {
        res.send({
          success: false,
          message: "No results found by this ID.",
        });
      } else {
        const setting = {
          browser: req.body.browser,
          incognito: req.body.incognito,
          wait_target_time: req.body.wait_target_time,
          visit_within: req.body.visit_within,
          visit_from_page: req.body.visit_from_page,
          visit_to_time: req.body.visit_to_time,
          complete_wait_time: req.body.complete_wait_time,
          no_sites_max: req.body.no_sites_max,
          no_sites_wait_time: req.body.no_sites_wait_time,
          reset_after: req.body.reset_after,
          device_reset: req.body.device_reset,
          vinn_reset: req.body.vinn_reset,
          phone_reset: req.body.phone_reset,
          mobile_reset: req.body.mobile_reset,
          fly_mode: req.body.fly_mode,
          remove_cookies: req.body.remove_cookies,
          change_resolution: req.body.change_resolution,
          mouse_tracks: req.body.mouse_tracks,
          data_saving: req.body.data_saving,
          random_generate: req.body.random_generate,
          analytics_protection: req.body.analytics_protection,
          remove_history: req.body.remove_history,
        };
        Setting.update(setting)
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
      }
    })
    .catch((err) =>
      res.status(400).send({
        success: false,
        message: err.message,
      })
    );
};
