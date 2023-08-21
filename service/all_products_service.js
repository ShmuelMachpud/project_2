const products = require('../dal/productsDal');
const allData = require('../dal/productsDal')

const get_all_products = () => {
    const all_products = products.get_all_products();
    return all_products;
}

const addProd = (newProd) => {
    const data = allData.getData().catch((data) => data);
    const newData = {...data, ...newProd}
    // console.log(data);
    console.log(newData);
}
module.exports = {get_all_products,addProd};