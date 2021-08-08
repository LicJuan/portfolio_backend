import { Router } from 'express'
import * as AutController from '../controllers/AuthController'
const router = Router()

router.post('/login', AuthController.login)

export default router