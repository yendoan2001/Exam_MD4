"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const staff_controller_1 = __importDefault(require("../controllers/staff.controller"));
const router = (0, express_1.Router)();
const staffController = new staff_controller_1.default;
router.get('/admin/staffs', staffController.index);
router.get('/admin/staffs/create', staffController.showCreateForm);
router.post('/admin/staffs/create', staffController.store);
router.get('/admin/staffs/delete/:id', staffController.delete);
router.get('/admin/staffs/update/:id', staffController.showUpdateForm);
router.post('/admin/staffs/update/:id', staffController.update);
router.get('/admin/staffs/detail/:id', staffController.showStaffDetails);
router.get('/admin/staffs/search/branch', staffController.filterByBranches);
exports.default = router;
//# sourceMappingURL=staff.router.js.map