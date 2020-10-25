//  Initial table for this database

module.exports = (sequelize, Sequelize) => {
  const Settings = sequelize.define("settings", {
    browser: {
      type: Sequelize.STRING(255),
      defaultValue: "chrome",
    },
    incognito: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    wait_target_time: {
      type: Sequelize.INTEGER(11),
      defaultValue: 295,
    },
    visit_within: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    visit_from_page: {
      type: Sequelize.INTEGER(11),
      defaultValue: true,
    },
    visit_to_time: {
      type: Sequelize.INTEGER(11),
      defaultValue: 3050,
    },
    complete_wait_time: {
      type: Sequelize.INTEGER(11),
      defaultValue: 310,
    },
    no_sites_max: { type: Sequelize.INTEGER(11), defaultValue: 10 },
    no_sites_wait_time: {
      type: Sequelize.INTEGER(11),
      defaultValue: 120,
    },
    reset_after: {
      type: Sequelize.INTEGER(11),
      defaultValue: 1,
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
      defaultValue: true,
    },
    mobile_reset: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    fly_mode: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    remove_cookies: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
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
      defaultValue: true,
    },
    random_generate: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    analytics_protection: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    remove_history: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: sequelize.literal("NOW()"),
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: sequelize.literal("NOW()"),
    },
  });

  return Settings;
};
