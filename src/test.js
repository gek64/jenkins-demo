const axios = require('axios')
require('./index')

axios.get('127.0.0.1:6666')
    .then(r => {
        console.log(r)
        process.exit(0)
    })
    .catch(e => {
        console.log(e)
        process.exit(1)
    })

