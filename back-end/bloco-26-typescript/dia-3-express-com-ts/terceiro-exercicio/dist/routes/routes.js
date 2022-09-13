"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controllers/productController"));
const productMiddleware_1 = __importDefault(require("../middlewares/productMiddleware"));
const router = (0, express_1.Router)();
const productController = new productController_1.default();
router.get('/price', productController.getAllByPriceRange);
router.get('/n-expired', productController.getAllNotExpired);
router.get('/', productController.getAll);
router.get('/:id', productController.getById);
router.delete('/:id', productController.remove);
router.use(productMiddleware_1.default);
router.post('/', productController.create);
router.put('/:id', productController.update);
exports.default = router;
