const mongoose      = require('mongoose');
const User          = require('../models/user');

const get = (req, res, next) => {
    if( !req.session.userId){
        var error = new Error('Vous n\'êtes pas autorisé' );
        err.status = 403;
        return next(err);
    }
    User.findById(req.session.userId)
        .exec((error, user) => {
            if(error){
                return next(error);
            }
            return res.render('Welcome ');
        })
} 

module.exports = {get};