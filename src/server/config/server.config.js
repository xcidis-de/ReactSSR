import compression from 'compression'
import cors from 'cors'
import path from 'path'
import express from 'express'

export const compress = function(req, res) {
    if (req.headers['x-no-compression']) {
        return false
    }
    return compression({filter: compression.filter(req, res)})
}

export const bodyParser = express.json({strict:true})

export const myCors = cors()

export const urlEncoded = express.urlencoded({extended: true})

export const staticFiles = express.static(path.resolve('./dist/public'))