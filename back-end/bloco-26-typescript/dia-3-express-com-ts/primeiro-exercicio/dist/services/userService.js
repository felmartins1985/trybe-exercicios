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
exports.login = exports.remove = exports.update = exports.create = exports.getById = exports.getAll = void 0;
const userModel = __importStar(require("../models/userModel")); //importa tudo
const MESSAGES = {
    USER_NOT_FOUND: 'User not found',
    UNAUTHORIZED: 'Invalid email or password',
    USER_EXISTS: 'User already exists',
};
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield userModel.getAll();
        return { status: 200, data };
    });
}
exports.getAll = getAll;
function getById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield userModel.getById(id);
        if (data === null)
            return { status: 404, error: { message: MESSAGES.USER_NOT_FOUND } };
        return { status: 200, data };
    });
}
exports.getById = getById;
function create(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const userExists = yield userModel.getByEmail(user.email);
        if (userExists)
            return { status: 400, error: { message: MESSAGES.USER_EXISTS } };
        const data = yield userModel.create(user);
        return { status: 201, data };
    });
}
exports.create = create;
function update(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const userExists = yield userModel.getById(id);
        if (!userExists)
            return { status: 404, error: { message: MESSAGES.USER_NOT_FOUND } };
        const data = yield userModel.update(id, user);
        if (data === null)
            return { status: 404, error: { message: MESSAGES.USER_NOT_FOUND } };
        return { status: 200, data };
    });
}
exports.update = update;
function remove(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield userModel.remove(id);
        if (data === null)
            return { status: 404, error: { message: MESSAGES.USER_NOT_FOUND } };
        return { status: 200, data };
    });
}
exports.remove = remove;
function login(userCredentials) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield userModel.getByEmail(userCredentials.email);
        if (data === null || data.password !== userCredentials.password) {
            return { status: 403, error: { message: MESSAGES.UNAUTHORIZED } };
        }
        return { status: 200, data: { token: 'fake token' } };
    });
}
exports.login = login;
