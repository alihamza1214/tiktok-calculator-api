module.exports = async function (products, req, res) {
    // console.log(helpers.fake.product);
    req.body = helpers.fake.product();
    const validationFailed = helpers.validation.productValidation(req.body);
    if (validationFailed) {
        return res.send(validationFailed.details);
    }
    const sku = await products.findOne({sku:req.body.sku});
    console.log(sku);
    if (sku){
        return res.send({'message':"sku already exists"});
    }
    const product = new products({
        name: req.body.name,
        sku: req.body.sku,
        promoText: req.body.promoText,
        nameLower: req.body.name,
        imgUrls: req.body.imgUrls,
        categories: req.body.categories,
        brand: req.body.brand,
        description: req.body.description,
        meta: req.body.meta,
        metaTitle: req.body.meta,
        metaDescription: req.body.metaDescription,
        metaKeywords: req.body.metaKeywords,
        variants: req.body.variants,
        attributes: req.body.attributes,
        featured: req.body.featured,
        position: req.body.position,
        keyFeatures: req.body.keyFeatures,
        popularity: req.body.popularity,
        store: req.body.store,
        vendor: req.body.vendor,
        active: req.body.active,
        hot: req.body.hot,
        sale: req.body.sale,
        offer: req.body.object,
        new: req.body.new,
        related: req.body.related,
        sizeChartUrl: req.body.sizeChartUrl,
        saleStart: req.body.saleStart,
        saleEnd: req.body.saleEnd,
        promotion: req.body.promotion,
    });
    try{
        const savedProduct = await product.save();
        return  res.send(savedProduct);
    }catch(e){
        return  res.send(e);

    }
};
