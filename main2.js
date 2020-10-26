const fs = require('fs')

const regex = /^[a-zA-Z].*\s:\s.*/gm
let configFile = process.argv[2] + '.json'

function parseINI(filename) {
    let fileContent = fs.readFileSync(filename, 'utf-8')
    fileContent = fileContent.replace(/=/gm, ':')
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
parseINI(process.argv[2])


