const router = require('express').Router();
const productController = require('../../controllers/api/products/product.controller');


router.get('/', productController.get);
router.get('/:id', productController.find);
router.post('/',productController.post);
router.put('/:id', productController.put);
router.delete('/:id', productController.delete);
module.exports = {
    router:router,
    name:'products',
    endpoint:'/api/products'
};
