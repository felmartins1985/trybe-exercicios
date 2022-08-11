const { expect } = require('chai');
const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');
const sinon = require('sinon');
/*
  Precisamos validar se estamos recebendo todos os campos
  necessários para a operação. Como trata-se de uma regra
  de negócio, validaremos na camada de serviços.
*/
describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', () => {
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

  describe('quando é inserido com sucesso', () => {
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
       // Restauraremos a função `create` original após os testes.
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

describe('buscar um filme pelo ID',()=>{
  describe('quando o ID não é informado',()=>{
    before(async()=>{
      sinon.stub(MoviesModel, 'getById').resolves()
    })
    after(async()=>{
      MoviesModel.getById.restore();
    })
    it('retorna null', async()=>{
      const response= await MoviesService.findById();
      expect(response).to.be.equal(null);
    })
  })
  describe('quando o Id é informado',()=>{
    const payload={
      id: 1,
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    }
    before(async()=>{
      sinon.stub(MoviesModel, 'getById').resolves(payload)
    })
    after(async()=>{
      MoviesModel.getById.restore();
    })
    it('retorna um objeto', async()=>{
      const response= await MoviesService.findById(1);
      expect(response).to.be.an('object');
    })
    it('o objeto nao esta vazio', async()=>{
      const response= await MoviesService.findById(1);
      expect(response).to.not.be.empty;
    })
    it('tal objeto possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async()=>{
      const response= await MoviesService.findById(1);
      expect(response).to.include.all.keys('id','title','releaseYear','directedBy');
    })
  })
})