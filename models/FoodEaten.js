var mongoose = require('mongoose');

var FoodEatenSchema = new mongoose.Schema({
  date: String,
  mealType: String,
  amount: String,
  foodItem: String
});

module.exports = mongoose.model('FoodEaten', FoodEatenSchema);
