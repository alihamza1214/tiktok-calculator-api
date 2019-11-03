const Joi = require('joi');

module.exports = {

    registerValidation: (data) => {
        const Schema = {
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().required().email(),
            password: Joi.string().required().min(6)
        };
        const  { error }  = Joi.validate(data, Schema);
        return error;
    },
    loginValidation: (data) => {
        const Schema = {
            email: Joi.string().required().email(),
            password: Joi.string().required().min(6)
        };
        const  { error }  = Joi.validate(data, Schema);
        return error;
    },
    productValidation: (data) => {
        const Schema = {
            name: Joi.string().required(),
            sku: Joi.string().required(),
            promoText: Joi.string(),
            imgUrls: Joi.array(),
            // categories:req.body.categories,
            // brand:req.body.brand,
            description:Joi.string().required(),
            meta: Joi.string(),
            metaTitle: Joi.string(),
            metaDescription: Joi.string(),
            metaKeywords: Joi.string(),
            variants:Joi.array(),
            attributes:Joi.array(),
            // featured: req.body.featured,
            // position:req.body.position,
            // keyFeatures: req.body.keyFeatures,
            // popularity: req.body.popularity,
            // store:req.body.store,
            // vendor:req.body.vendor,
            // active: req.body.active,
            // hot: req.body.hot,
            // sale: req.body.sale,
            // offer: req.body.object,
            // new: req.body.new,
            // related: req.body.related,
            // sizeChartUrl: req.body.sizeChartUrl,
            // saleStart: req.body.saleStart,
            // saleEnd: req.body.saleEnd,
            // promotion: req.body.promotion,
        };
        const  { error }  = Joi.validate(data, Schema);
        return error;
    }
};
