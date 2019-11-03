const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;
const products = new Schema({
    sku: {type: String, unique: true, required: true},
    name: {type: String, required: true},
    slug: {type: String, slug: ["name"], slugPaddingSize: 4, unique: true},
    promoText: String,
    nameLower: {type: String, lowercase: true},
    imgUrls: [{
        url: String,
        index: {type: Number, default: 0}
    }],
    categories: [{
        type: ObjectId, ref: 'categories'
    }],
    brand: {
        type: ObjectId, ref: 'brands'
    },
    description: String,
    meta: String,
    metaTitle: String,
    metaDescription: String,
    metaKeywords: String,
    variants: [{
        sku: {type: String, unique: true},
        price: {type: Number, default: 0},
        mrp: {type: Number, default: 0},
        offer: {type: Number, default: 0},
        shipping: {type: Number, default: 0},
        weight: String,
        combinations: [{
            size: {type: String, lowercase: true},
            color: {type: String, lowercase: true},
        }],
        trackInventory: {type: Boolean, default: false},
        stock: {type: Number, default: 0},
        threshold: {type: Number, default: 0},
        barcode: String,
        active: {type: Boolean, default: true},
        specialPrice: {type: Number, default: null},
        saleFromDate: {type: Date, default: Date.now},
        saleToDate: {type: Date, default: Date.now},
        order: {type: Number, default: 1},
        img: String
    }],
    attributes: [{key: String, val: String}],
    featured: {type: Boolean, default: false},
    position: {type: Number, default: 0},
    popularity: {type: Number, default: 0},
    store: {type: ObjectId, ref: 'stores'},
    vendor: {type: ObjectId, ref: 'vendors'},
    active: {type: Boolean, default: true},
    hot: {type: Boolean, default: false},
    sale: {type: Boolean, default: false},
    offer: Object,
    new: {type: Boolean, default: true},
    related: [{type: ObjectId, ref: 'products'}],
    sizeChart: String,
    sizeChartUrl: String,
    saleStart: {type: Date, default: Date.now()},
    saleEnd: {type: Date, default: Date.now()},
    promotion: {type: ObjectId, ref: 'promotions'},
}, {
    timestamps: true
});
// products.pre('save', function (next) {
//
//     if (this.isNew) {
//          for (let i = 1; i <= this.imgUrls.length; i++) {
//             this.imgUrls[i].index = i;
//         }
//          next();
//     } else {
//         next();
//     }
// });

module.exports = mongoose.model('products', products);
