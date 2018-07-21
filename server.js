const express = require('express');
const path = require('path');
const routes = require('./routes');
const app = express();
// body-parser extract the entire body portion of an incoming request stream and exposes it on  req.body
const bodyParser = require('body-parser');

// set the port
let port = process.env.PORT || 3000

// use the html view engine
app.set('view engine', 'html');

// Set Static Folder paths
app.use([bodyParser.json(), bodyParser.urlencoded({extended: true})]);
app.use(express.static(path.join(__dirname, 'client')));
app.use('/angularscripts', express.static(__dirname + '/node_modules/angular/'));
app.use('/angularroutescripts', express.static(__dirname + '/node_modules/angular-route/'));

// set the route of the calculator
app.use('/', routes);

//start the nodejs server
app.listen(port, (err) => {
  err
    ? console.log('Cannot connect...', err)
    : console.log(`Connected! Server is listening on port ${port}`);
});
