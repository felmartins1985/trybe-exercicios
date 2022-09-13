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
const postModel = __importStar(require("../models/postModel"));
const MESSAGES = {
    POST_NOT_FOUND: 'Post not found',
};
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield postModel.getAll();
        return { status: 200, data };
    });
}
exports.getAll = getAll;
function getById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield postModel.getById(id);
        if (data === null)
            return { status: 404, error: { message: MESSAGES.POST_NOT_FOUND } };
        return { status: 200, data };
    });
}
exports.getById = getById;
function create(post) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield postModel.create(post);
        return { status: 201, data };
    });
}
exports.create = create;
function update(id, post) {
    return __awaiter(this, void 0, void 0, function* () {
        const postExists = yield postModel.getById(id);
        if (!postExists)
            return { status: 404, error: { message: MESSAGES.POST_NOT_FOUND } };
        const data = yield postModel.update(id, post);
        return { status: 200, data };
    });
}
exports.update = update;
function remove(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield postModel.remove(id);
        if (data === null)
            return { status: 404, error: { message: MESSAGES.POST_NOT_FOUND } };
        return { status: 200, data };
    });
}
exports.remove = remove;
function getAllBySearchTerm(term) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield postModel.getAllBySearchTerm(term);
        if (!data || data.length === 0) {
            return { status: 404, error: { message: MESSAGES.POST_NOT_FOUND } };
        }
        return { status: 200, data };
    });
}
exports.getAllBySearchTerm = getAllBySearchTerm;
