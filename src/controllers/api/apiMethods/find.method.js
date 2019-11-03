module.exports = async function (model, req, res, select = []) {
    try {
        const documents = await model.findOne({_id: req.params.id}).select(select);
        return res.send(documents);
    } catch (e) {
        return res.send(e);
    }
};
