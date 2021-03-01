const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const mysql = require('mysql');
const app = express();

//const cases = require('./cases/cases');

console.log('process.env.REACT_APP_STAGE: ', process.env.REACT_APP_STAGE);
let port = 0;
switch (process.env.REACT_APP_STAGE) {
  case 'development':
    port = 8080;
    break;
  case 'production':
    port = 8081;
    break;
  case 'sit':
    port = 8082;
    break;
  case 'uat':
    port = 8083;
    break;
  default:
    port = 0;
    break;
}

console.log('port: ', port);

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(port);

console.log('API server started on: ' + port);

//const routes = require('./routes/app.routes'); //importing Routes
//routes(app); //register the route

//app.use('/api/cases', require('./cases/cases.js'));
//app.post('/api/cases', cases.create);
app.use('/api/cases', require('./cases/cases.routes.js'));

app._router.stack.forEach(function (r) {
  if (r.route && r.route.path) {
    console.log('Registered routes: ' + r.route.path);
  }
});
