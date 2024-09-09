const express = require('express');
const {
  createThing,
  getAllThings,
  getThingByPk,
  updateThingByPk,
  deleteThingByPk,
} = require('../controllers/thing.controller');

const routerThing = express.Router();

// routing Thing
routerThing.post('/', createThing);
routerThing.get('/', getAllThings);

routerThing
  .route('/:idThing')
  .get(getThingByPk)
  .put(updateThingByPk)
  .delete(deleteThingByPk);

module.exports = routerThing;