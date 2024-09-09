const { Thing } = require('../models');

module.exports.createThing = async (req, res, next) => {
  try {
    const { body } = req;
    const [newThing] = await Thing.create(body);
    if (newThing) {
      return res.status(201).send({ data: newThing });
    }
    //bad practice
    return res.status(400).send({ data: 'Bad request' });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllThings = async (req, res, next) => {
  try {
    const arrayOfThings = await Thing.findAll();
    if (arrayOfThings.length) {
      return res.status(200).send({ data: arrayOfThings });
    }
    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports.getThingByPk = async (req, res, next) => {
  try {
    const {
      params: { idThing },
    } = req;
    const [thing] = await Thing.findByPk(idThing);
    if (thing) {
      return res.status(200).send({ data: thing });
    }
    return res.status(404).send(); //bad practice
  } catch (error) {
    next(error);
  }
};
module.exports.updateThingByPk = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
module.exports.deleteThingByPk = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
