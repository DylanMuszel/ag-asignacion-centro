const create = require('./create');
const select = require('./selection');
const cross = require('./cross');
const mutate = require('./mutation');
const stopChriteria = require('./stopChriteria');
const calculateAptitude = require('./aptitudeFunction')

module.exports = {
  create,
  select,
  cross,
  mutate,
  stopChriteria,
  calculateAptitude
};
