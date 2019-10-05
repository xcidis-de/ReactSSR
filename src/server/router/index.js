import {Router} from 'express'
import renderer from '../renderers/index.render.js'

const router = Router()

// Home
router.use('/', renderer)

export default router