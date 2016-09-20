var express = require('express');
var router = express.Router();

var FoodEaten = require('../models/FoodEaten.js');
var ListFood = require('../models/ListOfFood.js');

router.get('/', function(req, res, next) {
  FoodEaten.find(function (err, foodseaten) {
    if (err) return next(err);
    res.json(foodseaten);
  });
});

router.post('/', function(req, res, next) {
  FoodEaten.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('#foods/', function (req, res, next) {
    ListFood.find(function (err, listfoods) {
        if (err) return next(err);
        res.json(listfoods);
    });
});

router.post('#foods/', function (req, res, next) {
    ListFood.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;