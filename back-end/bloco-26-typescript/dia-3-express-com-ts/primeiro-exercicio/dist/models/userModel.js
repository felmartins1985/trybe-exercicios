"use strict";
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
exports.remove = exports.update = exports.create = exports.getByEmail = exports.getById = exports.getAll = void 0;
const connection_1 = __importDefault(require("./connection"));
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const query = 'SELECT * FROM Users';
        const [users] = yield connection_1.default.execute(query);
        return users;
    });
}
exports.getAll = getAll;
function getById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = 'SELECT * FROM Users WHERE id = ?';
        const values = [id];
        const [data] = yield connection_1.default.execute(query, values);
        const [user] = data;
        return user || null;
    });
}
exports.getById = getById;
function getByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = 'SELECT * FROM Users WHERE email = ?';
        const values = [email];
        const [data] = yield connection_1.default.execute(query, values);
        const [user] = data;
        return user || null;
    });
}
exports.getByEmail = getByEmail;
function create(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, email, password } = user;
        const query = 'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)';
        const values = [name, email, password];
        const [result] = yield connection_1.default.execute(query, values);
        const { insertId: id } = result;
        const newUser = { id, name, email, password };
        return newUser;
    });
}
exports.create = create;
function update(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, email, password } = user;
        const query = 'UPDATE Users SET name = ?, email = ?, password = ? WHERE id = ?';
        const values = [name, email, password, id];
        yield connection_1.default.execute(query, values);
        const editedUser = { id, name, email, password };
        return editedUser;
    });
}
exports.update = update;
function remove(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const userToBeDeleted = yield getById(id);
        if (!userToBeDeleted)
            return null;
        const query = 'DELETE FROM Users WHERE id = ?';
        const values = [id];
        yield connection_1.default.execute(query, values);
        return userToBeDeleted;
    });
}
exports.remove = remove;
