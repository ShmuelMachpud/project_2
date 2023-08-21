const jsonfile = require('jsonfile'); 

const file = './data.json'

const get_all_products = () =>  {
    const products = jsonfile.readFileSync(file)
    return (products);
}

const getData = () => {
    const data = jsonfile.readFile(file);
    return data
}

module.exports = {get_all_products,getData};
