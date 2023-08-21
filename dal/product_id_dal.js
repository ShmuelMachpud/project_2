const jsonfile = require('jsonfile'); 

const file = './data.json'

function data_filter(id) {
    const myPromise = new Promise((resolve, reject) => {
        const data_id = jsonfile.readFileSync(file).filter((data) => data.id === id)
        if (data_id.length > 0 ) {
            resolve(data_id)
            return resolve
        } else {
            reject(' id not found!')
            return reject
        }
        
    })
    return myPromise
}

module.exports = {data_filter}