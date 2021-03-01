module.exports = function (app) {
  //const router = require('express').Router();
  const cases = require('./cases.controllers');

  app.use(function (req, res, next) {
    console.log('nexting');
  });

  app.route('/:id').get(cases.list_one);
  /*
  // create
  router.post('/', function (req, res) {
    console.log('in controller for post / ', req.body);
    cases.create(req.body);
    res.send('done post /');
  });

  // read
  router.get('/', function (req, res) {
    console.log('getting all');
    cases.list_all();
    res.send('done get /');
  });

  router.get('/:id',

  router.get('/:id', function (req, res) {
    console.log('getting one ', req.params.id);
    cases.list_one(req.params.id);
    res.send('done /:id');
  });*/

  // update

  // delete

  //module.exports = router;
};
