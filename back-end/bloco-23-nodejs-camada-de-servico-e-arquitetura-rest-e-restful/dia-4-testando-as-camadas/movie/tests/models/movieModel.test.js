const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');
/*
  Como ainda não temos a implementação, vamos fixar
  um objeto simulando os métodos que iremos desenvolver,
  porém, eles não terão nenhum comportamento
*/
describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  } 
  before(async () => {
    const execute = [{ insertId: 1 }]; // retorno esperado nesse teste

    sinon.stub(connection, 'execute').resolves(execute);
  });

  // Restauraremos a função `execute` original após os testes.
  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso', () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });

  });
});
describe('Busca apenas um filme no BD por seu ID', () => {
  describe('quando nao e nada chamado',()=>{
    before(async()=>{
      const execute=[[]];
      sinon.stub(connection, 'execute').resolves(execute);
    })
    after(async() => {
      connection.execute.restore();
    })
    it('retorna null',async()=>{
      const response= await MoviesModel.getById();
      expect(response).to.be.equal(null);
    })
  describe('quando existe o filme a ser chamado',()=>{
    payloadMovie={
        id: 1,
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
    }
    before(async()=>{
      // const execute=[{insertId: 1}] //olhar isso
      // sinon.stub(connection, 'execute').resolves(execute);
      sinon.stub(MoviesModel, 'getById').resolves(payloadMovie)
    })
    after(async() => {
      // connection.execute.restore();
      MoviesModel.getById.restore();
    })
    it('retorna um objeto', async()=>{
      const response= await MoviesModel.getById(1);
      expect(response).to.be.an('object')
    })
    it('retorna nao vazio', async ()=>{
      const response= await MoviesModel.getById(1);
      expect(response).not.to.be.empty
    })
    it('retorna um objeto com "id", "title", "releaseYear" e "directedBy"', async()=>{
      const response= await MoviesModel.getById(1);
      expect(response).includes.all.keys("id", "title", "releaseYear", "directedBy")
    })
  })  
  })
})