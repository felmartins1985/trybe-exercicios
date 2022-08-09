const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso', async () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});
describe('busca um filme no BD pelo seu ID',() => {
  before(() => {
    const execute=[[]];
    sinon.stub(connection,'execute').resolves(execute);
  })
  after(() => {
    connection.execute.restore();
  })
  describe('quando nao existe o filme com o ID determinado',() => {
    it('retorna null', async () => {
      const response= await MoviesModel.findById();
      expect(response).to.be.equal(null);
    })
  })
  describe('quando existe o filme com o ID determinado',() => {
    before(() => {
    sinon.stub(MoviesModel,'findById').resolves(  {
      id: 1,
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    })    
    })
    after(() => {
      MoviesModel.findById.restore();
    })
    it('retorna um objeto', async () => {
      const response= await MoviesModel.findById(1);
      expect(response).to.be.an('object');
    })
    it('nao esteja vazio',async ()=>{
      const response= await MoviesModel.findById(1);
      expect(response).to.not.be.empty;
    })
    it('o objeto possua as propriedades id, title, releaseYear e directedBy', async ()=>{
      const response= await MoviesModel.findById(1);
      expect(response).to.includes.all.keys('id','title','releaseYear','directedBy');
    })
})
})



