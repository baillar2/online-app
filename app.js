// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var controller = require('./controllers/controller.js')
// Create Express App Object \\
var app = express();
mongoose.connect('mongodb://localhost/dataBase')
// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\

app.get('/', function(req, res) {
	res.sendFile('html/index.html', {root : './public'});
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	res.sendFile('html/applicants.html', {root : './public'});
});
app.get('/api/applicants', controller.getUser)
// creates and applicant

app.post('/applicant', controller.createUser)

app.get('/success', function(req, res){
	res.sendFile('html/sucess.html', {root: './public'})
})

app.post('/api/removeUser', controller.removeUser)


// Creating Server and Listening for connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})