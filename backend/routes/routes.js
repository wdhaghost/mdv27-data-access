import {Router} from "express"
import * as productController from '../controllers/productController.js' 
import * as resellerController from '../controllers/resellerController.js' 
import * as categoryController from '../controllers/categoryControllery.js'

const router = Router()

router.get('/products',productController.getAllProduct)
router.get('/products/:id',productController.getProductById)
router.post('/products',productController.createProduct)
router.put('/products',productController.updateProduct)

router.get('/resellers',resellerController.getAllReseller)
router.get('/resellers/:id',resellerController.getResellerById)
router.post('/resellers',resellerController.createReseller)
router.put('/resellers',resellerController.updateReseller)
router.delete('/resellers',resellerController.deleteReseller)

router.get('/categories',categoryController.getAllCategories)



export default router;