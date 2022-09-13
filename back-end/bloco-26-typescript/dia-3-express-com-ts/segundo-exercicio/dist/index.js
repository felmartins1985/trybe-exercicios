"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postsRouter_1 = __importDefault(require("./routes/postsRouter"));
const app = (0, express_1.default)();
const { PORT = 3000 } = process.env;
app.use(express_1.default.json());
app.use('/posts', postsRouter_1.default);
app.listen(PORT, () => {
    console.log(`Listening port ${PORT}`);
});
