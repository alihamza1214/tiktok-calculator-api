const authRoutes = require('./src/routes/api/auth.route');
const tiktokUsersRoutes = require('./src/routes/api/tiktok.route');
const routes = require('./src/routes/web.route');
module.exports = function(app){
    app.use(authRoutes.endpoint,authRoutes.router);
    app.use(tiktokUsersRoutes.endpoint,tiktokUsersRoutes.router);
    app.use(routes.endpoint,routes.router);
};
