var express = require('express');
var userModel = require('./models/user');

module.exports = function(router) {

    // GET all users
    router.get('/getUser', function(req, res) {
        userModel.find(function(err, users) {
            if (err) {
                res.send(err);
            }
            res.json(users);
        });
    });

    /* GET user listing based on id. */
    router.get('/getUser/:user_id', function(req, res) {
        userModel.findById(req.params.user_id, function(err, user) {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    });

    // Add user to database
    router.post('/addUser', function(req, res) {
        var user = new userModel();

        user.username = req.body.username;
        user.firstname = req.body.firstname;
        user.lastname = req.body.lastname;
        user.email = req.body.email;
        user.password = req.body.password;
        user.admin = false;

        user.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.json({
                message: "User has been saved"
            });
        });
    });

    

};
