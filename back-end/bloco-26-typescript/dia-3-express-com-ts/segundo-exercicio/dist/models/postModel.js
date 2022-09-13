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
exports.getAllBySearchTerm = exports.remove = exports.update = exports.create = exports.getById = exports.getAll = void 0;
const connection_1 = __importDefault(require("./connection"));
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const query = 'SELECT * FROM Posts';
        const [posts] = yield connection_1.default.execute(query);
        return posts;
    });
}
exports.getAll = getAll;
function getById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = 'SELECT * FROM Posts WHERE id = ?';
        const values = [id];
        const [data] = yield connection_1.default.execute(query, values);
        const [post] = data;
        return post || null;
    });
}
exports.getById = getById;
function create(post) {
    return __awaiter(this, void 0, void 0, function* () {
        const { title, author, category, publicationDate } = post;
        const query = 'INSERT INTO Posts (title, author, category, publicationDate) VALUES (?, ?, ?, ?)';
        const values = [title, author, category, publicationDate];
        const [result] = yield connection_1.default.execute(query, values);
        const { insertId: id } = result;
        const newPost = { id, title, author, category, publicationDate };
        return newPost;
    });
}
exports.create = create;
function update(id, post) {
    return __awaiter(this, void 0, void 0, function* () {
        const { title, author, category, publicationDate } = post;
        const query = `UPDATE Posts SET title = ?, author = ?,
   category = ?, publicationDate = ? WHERE id = ?`;
        const values = [title, author, category, publicationDate, id];
        yield connection_1.default.execute(query, values);
        const editedPost = { id, title, author, category, publicationDate };
        return editedPost;
    });
}
exports.update = update;
function remove(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const postToBeDeleted = yield getById(id);
        if (!postToBeDeleted)
            return null;
        const query = 'DELETE FROM Posts WHERE id = ?';
        const values = [id];
        yield connection_1.default.execute(query, values);
        return postToBeDeleted;
    });
}
exports.remove = remove;
function getAllBySearchTerm(term) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `SELECT * FROM Posts WHERE title LIKE ? OR 
  author LIKE ? OR category LIKE ? OR publicationDate LIKE ?`;
        const values = [`%${term}%`, `%${term}%`, `%${term}%`, `%${term}%`];
        const [posts] = yield connection_1.default.execute(query, values);
        return posts;
    });
}
exports.getAllBySearchTerm = getAllBySearchTerm;
