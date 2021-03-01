module.exports = function (app) {
  const casesController = require('../controllers/casesController');

  app.route('/api/cases/:clientId').get(casesController.getAllCases);
};
