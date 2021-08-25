import { Router } from 'express'
import UserRoutes from './UserRoutes'
import CategoryRoutes from './CategoryRoutes'
import AuthRoutes from './AuthRoutes'
const router = Router()

router.use('/users', UserRoutes)
router.use('/categories', CategoryRoutes)
router.use('/auth', AuthRoutes)

export default router
