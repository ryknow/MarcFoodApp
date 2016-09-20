var mongoose = require('mongoose');

var listFoodSchema = new mongoose.Schema({
    name: String,
    calories: String,
    carbs: String
});

module.exports = mongoose.model('ListFood', listFoodSchema);