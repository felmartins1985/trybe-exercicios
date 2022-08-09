const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', async () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });
 
    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });

  });

  describe('quando é inserido com sucesso', async () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      MoviesModel.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});
describe('busca apenas um filme no BD',()=>{
  before(async()=>{
    const execute=[[]];
    sinon.stub(connection,'execute').resolves(execute);
  })
  after(async ()=>{
    connection.execute.restore();
  })
  describe('quando o id informado não é válido', async ()=>{
    it('retorna null', async ()=>{
      const response= await MoviesService.findById();
      expect(response).to.be.equal(null);
    })
  describe('quando o id informado é válido', async ()=>{
    before(async()=>{
      sinon.stub(MoviesModel,'findById').resolves(   // acredito que tenho que chamar o model 
      //antes para fazer da forma correta ao utilizar o service
      {
        id:1,
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      }
    );
    })
    after(async()=>{
      MoviesModel.findById.restore();
    }
  )
  it('retorna um objeto', async ()=>{
    const response= await MoviesService.findById(1);
    expect(response).to.be.an('object');
  })
  it('o objeto nao esta vazio',async ()=>{
    const response= await MoviesService.findById(1);
    expect(response).to.not.be.empty;
  })
  it('o objeto possui id, title, releaseYear e directedBy',async ()=>{
    const response= await MoviesService.findById(1);
    expect(response).to.includes.all.keys('id', 'title', 'releaseYear', 'directedBy');
  })
})})})