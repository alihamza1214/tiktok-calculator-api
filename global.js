global.config = require('./config/default.json');
global.helpers = require('./src/modules/helpers.module');
global.setConfig = function (key, value) {
    return config[key] = value;
};
global.unSetConfig = function (key) {
    delete config[key];
};