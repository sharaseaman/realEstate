var express = require('express');
var app = express();
var bodyParser = require( 'body-parser' );
var sale = require('./models/routes/sale');
var rental = require('./models/routes/rent');


app.use( bodyParser.json() );
app.use(express.static('public'));

app.use('/sale', sale);
app.use('/rent', rental);

app.listen(3003, function() {
    console.log('on 3003');
});