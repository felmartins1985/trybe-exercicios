"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateData(name, password, email) {
    if (password.length < 6 || password.length > 12) {
        const message = 'The field "password" must have between 6 and 12 characters';
        return ({ status: 400, message });
    }
    if (name.length < 3) {
        const message = 'The field "name" must have at least 3 characters';
        return ({ status: 400, message });
    }
    const regexEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
    if (!regexEmail.test(email)) {
        const message = 'The field "email" must have a valid email format';
        return ({ status: 400, message });
    }
    return null;
}
function validateBody(req, res, next) {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        const message = 'The fields "name", "email" and "password" are required';
        return res.status(400).json({ message });
    }
    const error = validateData(name, password, email);
    if (error)
        return res.status(error.status).json({ message: error.message });
    next();
}
exports.default = validateBody;
