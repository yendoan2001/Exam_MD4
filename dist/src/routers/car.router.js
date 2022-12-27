"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const car_controller_1 = __importDefault(require("../controllers/car.controller"));
const router = (0, express_1.Router)();
const carController = new car_controller_1.default;
router.get('/admin/products', carController.index);
router.get('/admin/products/create', carController.showCreateForm);
router.post('/admin/products/create', carController.store);
router.get('/admin/products/delete/:id', carController.delete);
router.get('/admin/products/update/:id', carController.showUpdateForm);
router.post('/admin/products/update/:id', carController.update);
router.get('/admin/products/detail/:id', carController.showCarDetails);
exports.default = router;
//# sourceMappingURL=car.router.js.map