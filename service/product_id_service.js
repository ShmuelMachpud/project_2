const get_data_filter = require('../dal/product_id_dal');

function get_data_id(id) {
const product_filter = get_data_filter.data_filter(id)
return product_filter
}

module.exports = {get_data_id}

