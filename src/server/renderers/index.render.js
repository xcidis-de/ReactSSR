import path from 'path'
import fs from 'fs'
import App from '../../client/App'


export default async (req, res) => {
    try {
        const indexPath = path.resolve('./public/index.html');
        const indexHtml = await fs.readFileSync(indexPath, {encoding: 'utf8'})
        const render = ReactDOMServer.renderToString(<App />)
        return res.send(
            indexHtml.replace(
                `<div id="home">__HOME__</div>`,
                `<div id="home">${render}</div>`
            )
        )
    } catch (e) {
        // potentially resolve the path in other ways.
        throw e

    }
}