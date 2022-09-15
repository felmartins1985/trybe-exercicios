"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
function validateData(author, category, publicationDate) {
    // verifica se o nome do autor e o nome da categoria têm pelo menos 3 caracteres cada
    if (author.length < 3
        || category.length < 3) { 
        const message = 'Author name and category name must be string and have at least 3 characters';
        return { status: 400, message };
    }
    if (!DATE_REGEX.test(publicationDate)
        || (new Date(publicationDate)).toString() === 'Invalid Date') {
        return {
            status: 400,
            message: 'publicationDate must be in the format \'yyyy-mm-dd\' and be a valid date',
        };
    }
    return null;
}
function validateBody(req, res, next) {
    const { title, author, category, publicationDate } = req.body;
    const properties = [title, author, category, publicationDate];
    // verifica se todos os campos foram preenchidos
    if (properties.some((info) => !info)) {
        const message = 'The fields "title", "author", "category" and "publicationDate" are required';
        return res.status(400).json({ message });
    }
    const error = validateData(author, category, publicationDate);
    if (error)
        return res.status(error.status).json({ message: error.message });
    next();
}
exports.default = validateBody;
