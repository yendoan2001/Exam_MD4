import { Router } from 'express';
import CarController from "../controllers/car.controller";
const router = Router()
const carController = new CarController;

router.get('/admin/products',carController.index);
router.get('/admin/products/create',carController.showCreateForm);
router.post('/admin/products/create',carController.store);
router.get('/admin/products/delete/:id',carController.delete);
router.get('/admin/products/update/:id',carController.showUpdateForm);
router.post('/admin/products/update/:id',carController.update);
router.get('/admin/products/detail/:id',carController.showCarDetails);


export default router;
