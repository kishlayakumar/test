var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var priceController = require('./routes/controller/price');
mongoose.connect('mongodb://localhost:27017/aamantran');
var app = express();
app.use(bodyParser()); 

function indexRequest(request, response) {
	response.sendFile(__dirname + '/client/view/index.html')
}
app.get('/',indexRequest);
app.use('/js', express.static(__dirname + '/client/js'));
app.get('/api/price', priceController.list);
app.post('/api/price', priceController.create);



app.listen(3000, function(){
	console.log('Server running');
});
