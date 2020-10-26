const fs = require('fs')

let fileContent = fs.readFileSync('env').toString()
let regex = /.*=.*/gm
let found = fileContent.match(regex)
let configFile = "php.json"

// CREATE A JSON FILE
fs.open(configFile, 'w+', function (err, f) {
    if (err) {
        return console.error(err);
    }
})

// CONVERT JSON FORMAT
fs.writeFile(configFile, JSON.stringify(found, null, '\t'), (err) => {
    if (err) throw err;
})
