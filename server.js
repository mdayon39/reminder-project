const	fs = require('fs');
const os = require('os');
const myCPU = os.cpus();

const express = require('express');
const hbs = require('hbs');

var app = express();

var port = process.env.PORT || 3000;
   
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('home.hbs',{
		message: myCPU[1].model
	});
})
 
app.get('/about', function (req, res){
	res.render('about.hbs');
})

app.listen(port, () => {
	console.log('server is listening to port', port);
})
