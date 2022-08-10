// models/CepModel.js

// Importamos a conexão com o banco
const connection = require('./connection');

// Regex que identifica um CEP já formatado
const CEP_REGEX = /^\d{5}-\d{3}$/;

// Função que formata um CEP
const formatCep = (cep) => {
  // Caso o CEP já esteja formatado, retorna o próprio CEP
  if (CEP_REGEX.test(cep)) return cep;
  // console.log(cep);
  // Caso não esteja formatado, utiliza regex para adicionar a formatação
  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
};

// Formata os campos para exibição
// const getNewCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
//   cep: formatCep(cep),
//   logradouro,
//   bairro,
//   localidade,
//   uf});

const findAddressByCep = async (cepToSearch) => {
  const treatedCep = cepToSearch.replace('-', '');
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?';
  const [result] = await connection.execute(query, [treatedCep])
  console.log(treatedCep,result);
  if (result.length===0 || !result) {
  // Caso nenhum resultado seja encontrado, retornamos `null`
  return null
  };
  const { cep, logradouro, bairro, localidade, uf } = result[0];

  return {
    cep: formatCep(cep),
    logradouro,
    bairro,
    localidade,
    uf,
  };
};
//
const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  // Removemos o traço do CEP para armazená-lo de forma limpa
  const modifyCep = cep.replace(/-/ig, '');

  const query = `
    INSERT INTO ceps (cep, logradouro, bairro, localidade, uf)
    VALUES (?, ?, ?, ?, ?)`;

  // Executamos a query
  await connection.execute(query, [modifyCep, logradouro, bairro, localidade, uf]);

  // Depois de inserir, retornamos os dados, como sinal de que foram guardados no banco
  return { modifyCep, logradouro, bairro, localidade, uf };
};
//
module.exports = {
  findAddressByCep,
  create,
};