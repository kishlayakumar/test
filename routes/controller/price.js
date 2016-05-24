
var price = require('./model');

module.exports.create = function (req, res) {
  var priceSet = new price.price(req.body);
  priceSet.save(function (err, result) {
  //console.log(result)
  console.log("put request price" + result)
  	res.json(result);
  });
}
module.exports.list = function (req, res) {
  price.price.find({}, function (err, results) {
  	console.log('Get request for price')
    res.json(results);
  });
}
