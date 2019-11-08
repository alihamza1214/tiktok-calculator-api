require = require("esm")(module /*, options*/);
require('app-module-path').addPath(__dirname);
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routeConfig');
require('./global');
// DB And Server Configuration
const app = express();
app.use(express.json());

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
app.listen(config.port, config.host, () => console.log('Server Running at http://%s:%s' ,config.host,config.port));
/*mongoose.connect(config.db).then(() => {
    console.log('MongoDB Connected');
});*/  //dont need mongodb for this project yet
// END DB And Server Configuration
//* Routes Registration **//
routes(app);
//* End Routes Registration **//
