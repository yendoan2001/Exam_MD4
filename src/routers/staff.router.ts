import { Router } from 'express';
import StaffController from "../controllers/staff.controller";
const router = Router()
const staffController = new StaffController;

router.get('/admin/staffs',staffController.index);
router.get('/admin/staffs/create',staffController.showCreateForm);
router.post('/admin/staffs/create',staffController.store);
router.get('/admin/staffs/delete/:id',staffController.delete);
router.get('/admin/staffs/update/:id',staffController.showUpdateForm);
router.post('/admin/staffs/update/:id',staffController.update);
router.get('/admin/staffs/detail/:id',staffController.showStaffDetails);
router.get('/admin/staffs/search/branch',staffController.filterByBranches);

export default router;
