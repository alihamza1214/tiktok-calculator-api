module.exports = async function (model, req, res,select = []) {
    const limit = req.query.limit ? parseInt(req.query.limit) : config.limit;
    const skip = req.query.skip ? parseInt(req.query.skip) : config.skip;
    const where = req.query.where ?  JSON.parse(req.query.where) : false;
    let query = helpers.objectKeyDelete(['limit','skip','where'],req.query);
    if (where) {
        if (query!==-1){
          query = {...query,...where};
        }
    }
    const documents = await model.find(query).limit(limit).skip(skip).select(select);
    // const count = await model.count(query).limit(limit).skip(skip).select(select);
    // console.log(limit);
    // console.log(skip);
    // const documents = await model.find(query);
    // console.log(documents);
    return res.send(documents);
    // return res.send({data:documents,count:count});

};
