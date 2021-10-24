const create = require('./create');
const createNewGeneration = require('./createNewGeneration');
const select = require('./selection');
const cross = require('./cross');
const mutate = require('./mutation');
const stopCriteria = require('./stopCriteria');
const calculateAptitude = require('./aptitudeFunction');

module.exports = {
  create,
  createNewGeneration,
  select,
  cross,
  mutate,
  stopCriteria,
  calculateAptitude,
};
