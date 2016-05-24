var mongo = require('mongodb');

var citySchema = new mongoose.Schema({name: String})
module.exports.price = mongoose.model('price', {
  id: String ,cost: String
});
module.exports.day = mongoose.model('dayswsie', {
  id: String, day: String ,city: [citySchema]
});

module.exports.city = mongoose.model('cityWise',{
  id: String, city: String
});

module.exports.roundTrip = mongoose.model('roundTrip', {
  id:String, TourDays : String, city:[citySchema]
});

module.exports.Theme = mongoose.model('Theme', {
  
  id:String, TourPackage : String, city:[citySchema]
});
