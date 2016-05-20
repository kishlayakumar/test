var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var controller = require('./routes/controller/controller')
mongoose.connect('mongodb://localhost:27017/mean-demo');
var app = express();
app.use(bodyParser()); 

function indexRequest(request, response) {
	response.sendFile(__dirname + '/client/view/index.html')
}
app.get('/',indexRequest);
app.use('/js', express.static(__dirname + '/client/js'));
app.get('/api/names', controller.list);
app.post('/api/names', controller.create);


app.listen(3000, function(){
	console.log('Server running');
});
