const sinon = require('sinon');
const { expect } = require('chai');
const MoviesService = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');


describe('Ao chamar o controller de create', () => {
  describe('quando o payload informado não é válido', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();
    })
      /*  
        Perceba que nosso stub também simula os comportamentos do `service`,
        dessa forma, conseguimos testar o comportamento do controller de
        maneira isolada.

        Aqui, todos os testes que requisitarem o serviço, devem receber
        retorno `false`.
      */
      sinon.stub(MoviesService, 'create')
        .resolves(false);
    after(() => {
          MoviesService.create.restore();
        });
    it('é chamado o status com o código 400', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
    });

  });

  describe('quando é inserido com sucesso', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();
      sinon.stub(MoviesService, 'create')
        .resolves({id: 1});
    })
    after(() => {
      MoviesService.create.restore();
    });
    it('é chamado o status com o código 201', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
    });

  });
});
describe('Ao utilizar o findById', () => {
  describe('quando nada foi encontrado no BD', () => {
    const response={};
    const request={};
    before(async()=>{
      request.params={id:1}; // serve so o numero ou tenho que passar a chave?
      response.status=sinon.stub().returns(response);
      response.json=sinon.stub().returns();
      sinon.stub(MoviesService, 'findById').resolves(null);
    })
    after(async()=>{
      MoviesService.findById.restore();
    })
    it('é chamado o status com o código 404', async () => {
      await MoviesController.findById(request, response)
      expect(response.status.calledWith(404)).to.be.equal(true);
    })
    it('o json vem com a resposta "Not Found"', async () => {
      await MoviesController.findById(request, response)
      expect(response.json.calledWith('Not Found')).to.be.equal(true);
    })
  })
  describe('quando existe algum filme no BD',()=>{
    const response={};
    const request={};
    const payload={
      id: 1,
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    }; 
  before(async()=>{
    request.params={id:1}; // serve so o numero ou tenho que passar a chave?
    response.status=sinon.stub().returns(response);
    response.json=sinon.stub().returns();
    sinon.stub(MoviesService, 'findById').resolves(payload);
  })
  after(async()=>{
    MoviesService.findById.restore();
  })
  it('é chamado o status com o código 200', async () => {
    await MoviesController.findById(request, response);  
    expect(response.status.calledWith(200)).to.be.equal(true);
  })
  it('é chamado o metodo json com um  objeto', async () =>{
    await MoviesController.findById(request, response);
    expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
  })
})});