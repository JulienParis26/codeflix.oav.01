const fs = require('fs')

const regex = /.*=.*/gm
let configFile = process.argv[2] + '.json'

function parseENV(filename) {
    let fileContent = fs.readFileSync(filename, 'utf-8')
    let found = fileContent.match(regex)

    // Create a json file
    fs.open(configFile, 'w+', function (err, f) {
        if (err) {
            return console.error(err);
        }
    })
    // Convert to json format
    fs.writeFile(configFile, JSON.stringify(found, null, '\t'), (err) => {
        if (err) throw err;
    })
}
parseENV(process.argv[2])


