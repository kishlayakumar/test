var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var controller = require('./routes/controller/controller')

app.use(bodyParser()); 

function indexRequest(request, response) {
	response.sendfile(__dirname + '/client/views/index.html')
}
app.get('/',indexRequest);
app.use('js', express.static(__dirname + 'client/js'));
app.post('/api/names', controller.create);


app.listen(3000, function(){
	console.log('Server running');
});