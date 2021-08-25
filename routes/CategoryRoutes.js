import { Router } from 'express'
import * as CategoryController from '../controllers/CategoryController'
const router = Router()

router.get('/', CategoryController.allCategories)
router.post('/', CategoryController.addCategory)
router.get('/:id', CategoryController.singleCategory)
router.put('/:id', CategoryController.updateCategory)
router.patch('/activate/:id', CategoryController.activateCategory)
router.patch('/deactivate/:id', CategoryController.deactivateCategory)
router.delete('/:id', CategoryController.deleteCategory)

export default router
