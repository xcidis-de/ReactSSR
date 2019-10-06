import express from 'express'
import router from './router/index'
import {staticFiles, myCors, jsonParser, urlEncoded} from './config/server.config'

const app = express()
const port = process.env.port
const host = process.env.host

app.use(myCors)
app.use(jsonParser)
app.use(staticFiles)
app.use(urlEncoded)
app.use(router)

app.listen(port, host, (err)=>{
    if (err) throw err;
    console.log(`Listening on port --${port}`)
})