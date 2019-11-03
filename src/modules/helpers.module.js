const Get = require('../controllers/api/apiMethods/get.method');
const Put = require('../controllers/api/apiMethods/put.method');
const Post = require('../controllers/api/apiMethods/post.method');
const Delete = require('../controllers/api/apiMethods/delete.method');
const Find = require('../controllers/api/apiMethods/find.method');
const validation = require('src/validation');
module.exports = {
    objectKeyDelete: function (keys,object) {

        if (Array.isArray(keys)){
            for (let i = 0;i<keys.length;i++){
                delete object[keys[i]];
            }
            return object;
        }else{
            return -1;
        }
    },
    apiRequest: {
        get:Get,
        put:Put,
        post:Post,
        delete:Delete,
        find:Find,
    },
    validation: validation,
    fake: {
        product:function () {
            const faker = require('faker');
            return {
                name: faker.commerce.productName(),
                sku: faker.lorem.word() + faker.random.number(),
                promoText: faker.random.words(),
                imgUrls: [
                    {
                        url: faker.image.imageUrl()
                    }, {
                        url: faker.image.imageUrl()
                    }, {
                        url: faker.image.imageUrl()
                    }, {
                        url: faker.image.imageUrl()
                    },
                ],
                description: faker.lorem.paragraph(),
                meta: faker.lorem.words(),
                metaTitle: faker.commerce.productName(),
                attributes: [
                    {key: 'color', val: faker.commerce.color()},
                ],
                variants: [
                    {
                        sku: faker.lorem.word() + faker.random.number(),
                        price: faker.commerce.price(),
                        mrp: faker.commerce.price(),
                        shipping: 150,
                        weight: faker.random.number(),
                        combinations: [{
                            size: 's',
                            color: faker.commerce.color(),
                        }, {
                            size: 'm',
                            color: faker.commerce.color(),
                        }, {
                            size: 'l',
                            color: faker.commerce.color(),
                        }],
                        trackInventory: false,
                        stock: faker.random.number(),
                        threshold: 10,
                        barcode: faker.random.number(),
                        active: true,
                        specialPrice: null,
                    }
                ]

            };
        }
    }
};
