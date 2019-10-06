const dotenv = require('dotenv').config()


module.exports = () => {
    if (process.env.NODE_ENV === 'dev') {
        return [require('./webpack/client.dev.js'), require('./webpack/server.dev.js')];
    }
    console.log(process.env.NODE_ENV)
    return [require('./webpack/client.prod.js'), require('./webpack/server.prod.js')];
}