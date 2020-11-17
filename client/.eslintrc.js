module.exports = {
  env: {
    browser: true,

    es2021: true
  },
  rules: { quotes: [1, "double"], semi: [1, "always"] },
  extends: ["standard", "plugin:react/recommended"]
};
