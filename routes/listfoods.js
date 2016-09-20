var router = require('express').Router();

var ListFood = require('../models/ListOfFood.js');

router.get('/', function (req, res, next) {
    ListFood.find(function (err, listfoods) {
        if (err) return next(err);
        res.json(listfoods);
    });
});

router.post('/', function (req, res, next) {
    ListFood.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
