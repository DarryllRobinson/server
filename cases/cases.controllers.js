const CasesModel = require('./cases.model');

exports.list_all = function (req, res) {
  console.log('list_all');
  CasesModel.getAllCases(function (err, cases) {
    if (err) {
      console.log('CasesModel.getAllCases error: ', err);
    } else {
      console.log('cases: ', cases);
      res.send(cases);
    }
  });
};

exports.list_one = function (req, res) {
  console.log('list_one ', req);
  CasesModel.getOneCase(req, function (err, cases) {
    console.log('res: ', res);
    if (err) {
      console.log('CasesModel.getOneCase error: ', err);
    } else {
      console.log('cases: ', cases);
      res.send(cases);
    }
  });
};

exports.create = function (req, res) {
  console.log('create req: ', req);
};
