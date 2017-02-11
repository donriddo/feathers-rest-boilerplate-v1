'use strict';

var express = require('express')
var router = express.Router()


module.exports = function(app) {

    router.post('/', function (req, res, next) {
        const body = req.body;
        User.create(body)
        .then(user => {
            return res.json(user);
        })
        .catch(next);
    });

    router.get('/', function(req, res, next) {
        User.find().then(users => {
            return res.status(200).json({message: "Users retrieved successfully", users: users});
        })
        .catch(next);
    });

    router.get('/about', function (req, res, next) {
        next();
    });

    return router;
};
