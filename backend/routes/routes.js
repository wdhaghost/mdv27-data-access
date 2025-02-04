import {Router} from "express"
import * as productController from '../controllers/productController.js' 
import * as resellerController from '../controllers/resellerController.js' 

const router = Router()

router.get('/products',productController.getAllProduct)
router.get('/products/:id',productController.getProductById)
router.post('/products',productController.createProduct)
router.put('/products',productController.updateProduct)
router.delete('/products',productController.deleteProduct)

router.get('/reseller',resellerController.getAllProduct)
router.get('/reseller/:id',resellerController.getProductById)
router.post('/reseller',resellerController.createProduct)
router.put('/reseller',resellerController.updateProduct)
router.delete('/reseller',resellerController.deleteProduct)



export default router;