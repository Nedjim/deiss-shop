const mongoose      = require('mongoose');
const User          = require('../models/user');

const get = (req, res, next) => {
    if(!req.session.userId) {
         var err = new Error('You are authorized to view this page');
         err.status = 403;
         return next(err);
    }
    User.findById(req.session.userId)
        .exec((error, user) => {
            return next(error);
        })
        return res.redirect('/profile')
}

const post = (req, res, next) => {
   if(req.body.pseudo && req.body.password) {
        User.authenticate(req.body.pseudo, req.body.password, (error, user) => {
            if(error || !user) {
                var error = new Error('Wrong email or password')
                error.status = 401;
                return next(error);
            }
            else {
                req.session.userId = user._id;
                return res.redirect('/profile');
          }
     })
   }
   else {
        var error = new Error('Email and password are required');
       error.status = 401;
       return next(error);
   }
}

module.exports = {get, post};