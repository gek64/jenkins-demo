const fs = require('fs')

let str = Date.now()

fs.mkdir('dist', function (err) {
    if (err) {
        if (err.code === 'EEXIST') {
            return null
        }
        return console.error(err)
    }
    console.log('folder created')
})

fs.writeFile('dist/time.txt', str, function (err) {
    if (err) {
        return console.error(err)
    }
    console.log('data write completed')
})
