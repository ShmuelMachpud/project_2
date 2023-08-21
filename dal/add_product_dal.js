const jsonfile = require('jsonfile');
const file = './data.json'

function add (id) {
    console.log("amit");
    const ne = [{id: id}]
    const data = [...jsonfile.readFileSync(file), ...ne]
    jsonfile.writeFileSync(file,data)
}

add(40)