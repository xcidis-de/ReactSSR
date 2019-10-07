import path from 'path'
import fs from 'fs'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../../client/App'

export default async (req, res) => {
    try {
        const indexPath = path.resolve('./dist/static/index.html')
        const indexHtml = await fs.readFileSync(indexPath, {encoding: 'utf8'})
        const render = ReactDOMServer.renderToString(<App/>)
        
        return res.send(
            indexHtml.replace(
                `<div id="home">__HOME__</div>`,
                `<div id="home">${render}</div>`
            )
        )
    } catch (err) {
        if (err) {
            console.error(err) // replace#logging
            return res.status(500).send('An error occurred')
        }
        

    }
}