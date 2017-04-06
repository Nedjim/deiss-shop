const mongoose = require('mongoose');
const User      = require('../models/user');


const getUser = (req, res) => {
    User.findOne({ _id: req.params.user_id }, (err, user) => {
          if(err){
            res.send(err);
          }
          res.send(user); 
        })
}

const putUser = (req, res) => {
    User.findOne({ _id: req.params.user_id}, (err, user) => {

          user.pseudo = req.body.pseudo;
          user.email = req.body.email;
          user.password = req.body.password;

          user.save(err => {
              if(err) {
                res.send(err);
              }
              res.send({ message: 'Book updated'})
          })
        })
}

const deleteUser = (req, res) => {
    User.remove({ _id : req.params.user_id}, err => {
          if(err){
            res.send(err);
          }
          res.send({message: 'User deleted'});
        })
}

module.exports = {getUser, postUser, deleteUser};