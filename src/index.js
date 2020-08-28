const fs = require('fs')
const emulator = require('emulatorjs')
const setter = new emulator.Setter

let str = Date.now()

let obj = {
    'name': 'cname',
    'age|1-200': 1
}

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


setter.configureRandomArray('/', obj, 1, 100)
setter.start(6666)
console.log('http://localhost:6666')
