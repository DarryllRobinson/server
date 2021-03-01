'use strict';
const sql = require('../config/db');
const router = require('express').Router();

// create
router.post('/', function (req, res) {
  console.log('post create still to be written');
  res.send('post create still to be written');
});

// read
router.get('/', function (req, res) {
  console.log('get list still to be written');
  res.send('done get /');
});

router.get('/:id', function (req, res) {
  const caseId = req.params.id;

  sql.query(
    `SELECT * FROM cases
    WHERE id = ?;`,
    caseId,
    function (err, res) {
      if (err) {
        console.log('case get error: ', err);
        res.send(err);
      } else {
        console.log('case res: ', res);
        res.send(res);
      }
    }
  );
});

// update

// delete

module.exports = router;
