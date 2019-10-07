import cors from 'cors'
import path from 'path'
import express from 'express'

export const jsonParser = express.json()

export const myCors = cors()

export const urlEncoded = express.urlencoded({extended: true})

export const staticFiles = express.static(path.resolve('./dist/static'))