const axios = require('axios')
require('./index')

axios.get('/')
    .then(r => {
        console.log(r)
        process.exit(0)
    })
    .catch(e => {
        console.log(e)
        process.exit(1)
    })

