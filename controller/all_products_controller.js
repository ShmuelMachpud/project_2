const products = require("../service/all_products_service")

const get_all_products = (req, res) =>{
    const all_products = products.get_all_products()
    res.send(all_products)
}

const get_data_id = require('../service/product_id_service')

function get_product_id(id, res) {
    const get_product =  get_data_id.get_data_id(id)
    .then((resolve) => res.send(resolve))
    .catch((error) => res.status(400).send(error))
    
    

    return get_product
}


const createProd = (req, res) =>{
    const id = req.body.id
    const title = req.body.title
    console.log(id);
    console.log(title);
    const newProd = {id, title,}
    products.addProd(newProd)
    res.send(newProd)
}


module.exports = {get_all_products,get_product_id,createProd};