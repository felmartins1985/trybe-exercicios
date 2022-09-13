"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.getAllBySearchTerm = exports.remove = exports.update = exports.create = exports.getById = exports.getAll = void 0;
const postService = __importStar(require("../services/postService"));
function getAll(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { status, data } = yield postService.getAll();
        res.status(status).json(data);
    });
}
exports.getAll = getAll;
function getById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { status, data, error } = yield postService.getById(Number(id));
        return error
            ? res.status(status).json({ error })
            : res.status(status).json(data);
    });
}
exports.getById = getById;
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const post = req.body;
        const { status, data } = yield postService.create(post);
        res.status(status).json(data);
    });
}
exports.create = create;
function update(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const post = req.body;
        const { status, data, error } = yield postService.update(Number(id), post);
        return error
            ? res.status(status).json({ error })
            : res.status(status).json(data);
    });
}
exports.update = update;
function remove(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { status, data, error } = yield postService.remove(Number(id));
        return error
            ? res.status(status).json({ error })
            : res.status(status).json(data);
    });
}
exports.remove = remove;
function getAllBySearchTerm(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const term = req.query.term;
        const { status, data, error } = yield postService.getAllBySearchTerm(term);
        return error
            ? res.status(status).json({ error })
            : res.status(status).json(data);
    });
}
exports.getAllBySearchTerm = getAllBySearchTerm;
