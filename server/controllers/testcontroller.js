let express = require('express');
let router = express.Router();
let sequelize = require('../db');
let User = sequelize.import('../models/user');
let Log = sequelize.import('../models/log');

let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');

router.get('/', function (req, res) {
    res.send('This is a test in Express')
});


router.post('/create', function (req, res) {
    var owner = req.user.id;
    var result = req.body.results;
    var descriptions = req.body.descriptions;
    var definitions = req.body.definitions;


    Log.create({
        owner: owner,
        results: result,
        descriptions: descriptions,
        definitions: definitions
    })
        .then(data => res.status(200).json(data))
        .catch(err => res.json({ error: err }))

});


router.get('/log', function (req, res) {
    var userid = req.user.id;

    Log.findAll({
        where: { owner: userid }
    }).then(
        function findAllSuccess(data) {
            res.json(data);
        },
        function findAllError(err) {
            res.send(500, err.message);
        }
    );
});


router.get('/:id', function (req, res) {
    var data = req.params.id;
    var userid = req.user.id;

    Log
        .findOne({
            where: { id: data, owner: userid }
        }).then(
            function findOneSuccess(data) {
                res.json(data);
            },
            function findOneError(err) {
                res.send(500, err.message);
            }
        );
});


router.put('/:id', function (req, res) {
    var data = req.params.id;
    var userid = req.user.id;
    var descriptions = req.body.descriptions;
    var results = req.body.results;
    var definitions = req.body.definitions;

    Log
        .update({
            descriptions: descriptions,
            definitions: definitions,
            results: results
        }, {
            where: {
                id: data,
                owner: userid
            }
        })


        .then(
            function updateSuccess(updatedLog) {
                res.json({
                    updatedLog
                });
            },
            function updateError(err) {
                res.send(500, err.message);
            }
        )
    console.log(req.user.id)
    console.log(req.params.id);
});


router.delete('/:id', function (req, res) {
    var data = req.params.id;
    var userid = req.user.id;

    Log
        .destroy({
            where: { id: data, owner: userid }
        }).then(
            function deleteLogSuccess(data) {
                res.send("you removed a log");
            },
            function deleteLogError(err) {
                res.send(500, err.message);
            }
        );
});

module.exports = router;
