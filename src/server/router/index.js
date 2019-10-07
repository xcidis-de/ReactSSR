import {Router} from 'express'
import App from '../renderers/App.render.js'

const router = Router()

// Home
router.use('^/$', App)

export default router