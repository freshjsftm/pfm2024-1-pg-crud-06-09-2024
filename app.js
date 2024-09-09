const express = require('express');
const {
  createThing,
  getAllThings,
  getThingByPk,
  updateThingByPk,
  deleteThingByPk,
} = require('./controllers/thing.controller');
const app = express();

app.use(express.json());

// routing
app.post('/things', createThing);
app.get('/things', getAllThings);

app
  .route('/things/:idThing')
  .get(getThingByPk)
  .put(updateThingByPk)
  .delete(deleteThingByPk);

module.exports = app;
