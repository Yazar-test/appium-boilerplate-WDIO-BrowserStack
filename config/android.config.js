const {config} = require('./wdio.conf');

config.cucumberOpts.tagExpression = '@Automated'; // pass tag to run tests specific to android

exports.config = config;
