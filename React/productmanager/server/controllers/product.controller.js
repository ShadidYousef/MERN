const { Product } = require('../models/product.models');
module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}
// The method below is new
module.exports.createProduct = (request, response) => {
    const { title, price,description } = request.body;
    Product.create({
       title,
       price,
       description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}



module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.json({ products: allProducts })
        })
        .catch((err) => {
            res.json(err)
        });
}
 
module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}