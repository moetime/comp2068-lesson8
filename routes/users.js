var express = require('express');
var router = express.Router();

// link to account model

var Account = require('../models/account');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    }
    else {
        res.redirect('/login');
    }
}

/* GET users listing. */
router.get('/', isLoggedIn, function(req, res, next) {
  res.send('respond with a resource');
   Account.find(function(err, accounts) {
        if (err) {
            console.log(err);
            res.render('error');
        }
        else {
            // load the games view
            res.render('users', {
                title: 'List of users',
                accounts: accounts,
                user: req.user
            });
        }
    });
});

module.exports = router;
