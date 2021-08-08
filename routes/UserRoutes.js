import { Router } from 'express'
import * as UserController from '../controllers/UserController'
const router = Router()

router.get('/', UserController.allUsers)
router.post('/', UserController.addUser)
router.get('/:id', UserController.singleUser)
router.put('/:id', UserController.updateUser)
router.patch('/activate/:id', UserController.activateUser)
router.patch('/deactivate/:id', UserController.deactivateUser)
router.delete('/:id', UserController.deleteUser)

export default router
