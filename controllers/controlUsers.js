const mongoose      = require('mongoose');
const User          = require('../models/user');

const get = (req, res) => {
    User.find((err, users)=> {
        if(err){
          res.send(err);
        }
        res.send(users);
      })
}

const post = (req, res) => {
    var user = new User();
    user.pseudo = req.body.pseudo;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save((err) => {
      if(err){
        res.send(err);
      }
      req.session.userId = user._id; 
      return res.redirect('/profile'); 
    })
}

module.exports = {get, post};