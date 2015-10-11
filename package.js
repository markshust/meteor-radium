Package.describe({
  name: 'markoshust:radium',
  version: '0.1.0',
  summary: 'Add Radium to Meteor',
  git: 'https://github.com/markoshust/meteor-radium.git',
  documentation: 'README.md'
});

Npm.depends({
  "externalify": "0.1.0",
  "radium": "0.14.1"
});

Package.onUse(function(api) {
  api.use([
    "react@0.1.7",
    "cosmos:browserify@0.5.0"
  ]);

  api.addFiles([
    "app.browserify.js",
    "app.browserify.options.json"
  ]);

  api.addFiles("window.react.js", "client", "server");

  api.export("Radium", "client");
});

