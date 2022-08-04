// models/Author.js

const connection = require('./connection');
const Author = require('./Author');
// Busca todos os autores do banco.
const getAllBooks = async () => {
	// const [books] = await connection.execute(
	// 	'SELECT * FROM model_example.books;',
	// );
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;';
  // O caractere ? na query será substituído pelo authorId que informamos no array [authorId];
  const [books] = await connection.execute(query, [authorId]);
		return books.map((book)=>({
      id,
      title,
      authorId: author_id,
    }));
};
//
const findById = async (id) => {
	// Repare que substituímos o id por `?` na query.
	// Depois, ao executá-la, informamos um array com o id para o método `execute`.
	// O `mysql2` vai realizar, de forma segura, a substituição do `?` pelo id informado.
	const query = 'SELECT * FROM model_example.books WHERE id = ?'
	const [ books ] = await connection.execute(query, [id]);

	if (books.length === 0) return null;
  return books.map((book)=>({
    id,
    title,
    authorId: author_id,
  }))[0];
	// Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID.
	
};
//
const isValid = async (title, author_id) => {
	if (!title || title.length<3) return false;
	if (!author_id || !(await Author.findById(author_id) )) return false;

	return true;
};

const create = async (title, author_id) => connection.execute(
	'INSERT INTO model_example.books (title,author_id) VALUES (?,?)',
	[title, author_id],
);
//
module.exports = {
	getAllBooks,
  findById,
  isValid,
  create,
};