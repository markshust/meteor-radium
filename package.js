Package.describe({
  name: 'markoshust:radium',
  version: '0.15.3',
  summary: 'Add the React Radium package to Meteor',
  git: 'https://github.com/markoshust/meteor-radium.git',
  documentation: 'README.md'
});

Npm.depends({
  'externalify': '0.1.0',
  'radium': '0.15.3'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'cosmos:browserify@0.8.4',
    'react@0.14.1_1'
  ]);
  api.addFiles([
    'app.browserify.js',
    'app.browserify.options.json'
  ]);
  api.export('Radium');
});
