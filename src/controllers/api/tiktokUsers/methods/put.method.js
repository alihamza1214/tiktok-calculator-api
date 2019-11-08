module.exports = async function (products, req, res) {
    if (!req.body){
        return res.send({'status':'fullFill','message':'body should not be empty!'})
    }
    if (req.body._id){
        delete req.body._id;
    }
    try {
        const product = await products.findOne({_id: req.params.id});


        return res.send(documents);
    } catch (e) {
        return res.send(e);
    }
};
