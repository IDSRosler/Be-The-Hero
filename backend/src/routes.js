const express = require('express');

const OngController = require('./controllers/OngController');
const IncidetController = require('./controllers/IncidentController');
const PofileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// app.get('rota(/ = raiz)', (arq1, arg2) = função com 2 arg => {} = escopo da função)

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidetController.index);
routes.post('/incidents', IncidetController.create);
routes.delete('/incidents/:id', IncidetController.delete)

routes.get('/profile', PofileController.index);

module.exports = routes;