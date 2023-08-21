const express = require('express');
const products = require('./controller/all_products_controller');



const router = express.Router();


router.get('/all', products.get_all_products);

router.get('/:id',(req, res) => {
    const req_id = req.params.id;
    products.get_product_id(req_id, res)
});

router.post('/',products.createProd)

module.exports = router