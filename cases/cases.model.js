'use strict';
const sql = require('../config/db');

const Case = function (model) {
  this.createdDate = new Date();
};

Case.getAllCases = function (result) {
  console.log('Running getAllCases');
  sql.query(`SELECT * FROM cases;`, function (err, res) {
    if (err) {
      console.log('getAllCollectionsByClientId error: ', err);
      result(null, err);
    } else {
      //console.log('collections res: ', res);
      result(null, res);
    }
  });
};

Case.getOneCase = function (caseNumber, result) {
  console.log('Running getOneCase');
  sql.query(
    `SELECT * FROM cases WHERE cases.caseNumber = ?;`,
    caseNumber,
    function (err, res) {
      if (err) {
        console.log('getOneCase error: ', err);
        result(null, err);
      } else if (res.length === 0) {
        console.log('res for nothing: ', res);
        result(null, 'Nothing found');
      } else {
        console.log('getOneCase res: ', res);
        result(null, res);
      }
    }
  );
};

module.exports = Case;
