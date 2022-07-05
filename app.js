const express = require('express');

const app = express();
const productsRoute = require('./routes/productsRoute');
const salesRoute = require('./routes/salesRoute');
const errorMiddleware = require('./middlewares/errorMiddleware');

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/products', productsRoute);
app.use('/sales', salesRoute);

app.use(errorMiddleware);

module.exports = app;
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação
