"use strict";
// ./models/book.model.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class ProductModel {
    constructor(connection) {
        this.connection = connection;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection
                .execute('SELECT * FROM Products');
            const [products] = result;
            return products;
        });
    }
    ////////////////////////////////////////////////////
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection
                .execute('SELECT * FROM Products WHERE id=?', [id]);
            const [data] = result;
            const [product] = data;
            return product || null;
        });
    }
    ////////////////////////////////////////////////////
    create(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, brand, price, manufacturingDate, expirationDate } = product;
            const result = yield this.connection.execute('INSERT INTO Products ( name, brand, price, manufacturingDate, expirationDate) VALUES (?, ?, ?, ?, ?)', [name, brand, price, manufacturingDate, expirationDate]);
            const [dataInserted] = result;
            const { insertId } = dataInserted;
            return Object.assign(Object.assign({}, product), { id: insertId });
        });
    }
    ////////////////////////////////////////////////////
    update(id, product) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, brand, price, manufacturingDate, expirationDate } = product;
            yield this.connection.execute('UPDATE Products SET name=?,brand=?,price=?,manufacturingDate=?,expirationDate=? WHERE id=?', [name, brand, price, manufacturingDate, expirationDate, id]);
            const editedProduct = Object.assign({ id }, product);
            return editedProduct;
        });
    }
    //////////////////////////////////////
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const productToBeDeleted = yield this.getById(id);
            if (!productToBeDeleted)
                return null;
            yield this.connection.execute('DELETE FROM Products WHERE id=?', [id]);
            return productToBeDeleted;
        });
    }
    getAllByPriceRange(start, end) {
        return __awaiter(this, void 0, void 0, function* () {
            const [products] = yield this.connection.execute('SELECT * FROM Products WHERE price >= ? AND price <= ?', [start, end]);
            return products;
        });
    }
    getAllNotExpired() {
        return __awaiter(this, void 0, void 0, function* () {
            const currentTime = new Date().toISOString().slice(0, 10);
            const query = 'SELECT * FROM Products WHERE expiration_date >= ?';
            const values = [currentTime];
            const [products] = yield this.connection.execute(query, values);
            return products;
        });
    }
}
exports.default = ProductModel;
