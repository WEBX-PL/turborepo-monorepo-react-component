module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `webx-pl-eslint-config`
  extends: ["acme"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
