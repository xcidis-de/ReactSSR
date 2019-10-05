import express from 'express'
import {myCors, compress, staticFiles, urlEncoded, bodyParser} from './config/server.config.js'
import router from './router/index.js'

const app = express()
const port = process.env.port
const host = process.env.host

app.use(myCors)
app.use(compress)
app.use(bodyParser)
// app.use(staticFiles)
app.use(urlEncoded)
app.use(router)

app.listen(port, host, (err)=>{
    if (err) throw err;
    console.log(`Listening on port ${port}`)
})