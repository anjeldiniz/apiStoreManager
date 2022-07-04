const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connections');
const ProductsModel = require('../../../models/productsModel');

describe('Consulta um produto no Banco de Dados', () => {
  const resolve = [{ id: 1, name: 'pão de queijo', id: 2, name: 'brigadeiro' }];
  
  beforeEach(async () => {
    const execute = [{ id: 1, name: 'pão de queijo' }];
    sinon.stub(connection, 'execute').resolves(execute);
  });

  afterEach(async () => {
    connection.execute.restore();
  });

  describe('')
});