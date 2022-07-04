const sinon = require('sinon');
const { expect } = require('chai');

const productsService = require('../../../services/productsService');
const productsController = require('../../../controllers/productsController');

describe('Consulta os Produtos no BD e retorna todos os dados encontrados', () => {
  const res = {};
  const req = {};
  const next = () => {};
  const resolve = [{ id: 1, name: 'pão de queijo' }];

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'getAll').resolves(resolve);
  });

  afterEach(() => {
    productsService.getAll.restore();
  });

  it('é chamado o método "status" com o código 200', async () => {
    await productsController.getAll(req, res, next);
    expect(res.status.calledWith(201)).to.be.equal(true);
  });
  
  it('é chamado o método "json" passando um array', async () => {
    await productsController.getAll(req, res, next);
    expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
  });
});
