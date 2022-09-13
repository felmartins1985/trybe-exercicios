"use strict";
// ./services/books.service.ts
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
const connection_1 = __importDefault(require("../models/connection"));
const productModel_1 = __importDefault(require("../models/productModel"));
const MESSAGES = {
    PRODUCT_NOT_FOUND: 'Product not found',
};
class ProductService {
    constructor() {
        this.model = new productModel_1.default(connection_1.default);
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this.model.getAll();
            return { status: 200, products };
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.model.getById(id);
            if (data === null)
                return { status: 404, error: { message: MESSAGES.PRODUCT_NOT_FOUND } };
            return { status: 200, data };
        });
    }
    create(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.model.create(product);
            return { status: 201, data };
        });
    }
    update(id, product) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.model.getById(id);
            if (!data) {
                return { status: 404, error: { message: MESSAGES.PRODUCT_NOT_FOUND } };
            }
            const updt = yield this.model.update(id, product);
            return { status: 200, updt };
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.model.getById(id);
            if (!data) {
                return { status: 404, error: { message: MESSAGES.PRODUCT_NOT_FOUND } };
            }
            const rmv = yield this.model.remove(id);
            return { status: 200, rmv };
        });
    }
    getAllByPriceRange(start, end) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Number.isNaN(start) || Number.isNaN(end)) {
                return { status: 401, error: { message: '"start" and "end" params must be numbers' } };
            }
            if (start > end) {
                return { status: 401, error: { message: '"end" param must be greater than "start"' } };
            }
            const data = yield this.model.getAllByPriceRange(start, end);
            return { status: 200, data };
        });
    }
    getAllNotExpired() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.model.getAllNotExpired();
            return { status: 200, data };
        });
    }
}
exports.default = ProductService;
