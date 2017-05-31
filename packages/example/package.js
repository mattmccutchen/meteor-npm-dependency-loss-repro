Package.describe({
  name: "example",
  version: "0.0.0"
});

Npm.depends({
  install: "0.10.0",
  optimism: "0.3.3"
});

Package.onUse(function (api) {
  api.mainModule('main.js');
});
