"use strict";
// ./controllers/books.controller.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../services/productService"));
class ProductsController {
    constructor(productService = new productService_1.default()) {
        this.productService = productService;
        this.getAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            const productsAll = yield this.productService.getAll();
            const { products, status } = productsAll;
            res.status(status).json(products);
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const productGetById = yield this.productService.getById(id);
            if (!productGetById) {
                return res.status(404)
                    .json({ message: 'Book not found!' });
            }
            res.status(200).json(productGetById);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const product = req.body;
            const productCreated = yield this.productService.create(product);
            res.status(201).json(productCreated);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const productUpdt = req.body;
            const { status, updt, error } = yield this.productService.update(id, productUpdt);
            return error
                ? res.status(status).json({ error })
                : res.status(status).json(updt);
        });
        this.remove = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const { status, rmv, error } = yield this.productService.remove(id);
            return error
                ? res.status(status).json({ error })
                : res.status(status).json(rmv);
        });
    } //<-- e essa chave?
    getAllByPriceRange(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { start, end } = req.query;
            const { status, data, error } = yield this.productService
                .getAllByPriceRange(Number(start), Number(end));
            return error
                ? res.status(status).json({ error })
                : res.status(status).json(data);
        });
    }
    getAllNotExpired(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { status, data } = yield this.productService.getAllNotExpired();
            res.status(status).json(data);
        });
    }
}
exports.default = ProductsController;
