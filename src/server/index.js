const express = require('express')
const path = require('path')
// import {myCors, compress, staticFiles, urlEncoded, bodyParser} from './config/server.config.js'
// import router from './router/index.js'

const app = express()
// const port = process.env.port
// const host = process.env.host

// app.use(myCors)
// app.use(compress)
// app.use(bodyParser)
// app.use(staticFiles)
// app.use(urlEncoded)
// app.use(router)

app.use(express.static(path.resolve('./dist/public')))

app.listen(8000, 'localhost', (err)=>{
    if (err) throw err;
    console.log(`Listening on port 9---`)
})