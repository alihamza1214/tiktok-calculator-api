const authRoutes = require('./src/routes/api/auth.route');
const productRoutes = require('./src/routes/api/products.route');
const routes = require('./src/routes/web.route');
module.exports = function(app){
    app.use(authRoutes.endpoint,authRoutes.router);
    app.use(productRoutes.endpoint,productRoutes.router);
    app.use(routes.endpoint,routes.router);
};
