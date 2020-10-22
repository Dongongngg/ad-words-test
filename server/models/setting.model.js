module.exports = (sequelize, Sequelize) => {
  const Settings = sequelize.define("settings", {
    browser: {
      type: Sequelize.STRING(11),
    },
    incognito: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    wait_before_seconds: {
      type: Sequelize.INTEGER(11),
    },
    visit_within: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    visit_from_seconds: {
      type: Sequelize.INTEGER(11),
    },
    wait_after_seconds: {
      type: Sequelize.INTEGER(11),
    },
    wait_not_found_seconds: {
      type: Sequelize.INTEGER(11),
    },
    reset_after_seconds: {
      type: Sequelize.INTEGER(11),
    },
    device_reset: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    vinn_reset: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    phone_reset: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    mobile_reset: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    fly_mode: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    remove_cookies: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    change_resolution: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    mouse_tracks: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    data_saving: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    random_generate: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    analytics_protection: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    remove_history: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  });

  return Settings;
};
