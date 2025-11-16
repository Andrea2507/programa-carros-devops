const express = require('express');
require('dotenv').config();
var cors = require('cors');

const sequelize = require('./db/db');
const carroRoutes = require('./routes/carro.routes');

const app = express();
app.use(express.json());
app.use(cors());


app.use('/', carroRoutes);

sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Base de datos conectada');
  });
}).catch(err => {
  console.error('Error al conectar la base de datos', err);
});
