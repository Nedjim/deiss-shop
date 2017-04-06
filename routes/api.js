var express         = require('express');
var router          = express.Router();
var User            = require('../models/user');


/*User.methods(['get', 'post', 'put', 'delete']);
User.register(router, '/user')*/
/*
router.route('/register')
.get((req, res, next) => {

    User.find((err, users) => {
        if(err) {
            res.send(err);
        }
        res.send(users);
    })
})
.post((req, res, next) => {

    if(req.body.email && req.body.name && req.body.password){
        if(req.body.password != req.body.confirmPassword){
            var err = new Error('Password do not match.');
            err.status = 400;
            return next(err);
        }

        var userData = {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password
        }

        User.create(userData, (error, user) => {
            if(error){
                return next(error);
            }
            else {
                return res.redirct('/profile')
            }
        } );

    }
    else {
        var err = new Error('All fields required');
        err.status = 400;
        return next(err);
    }
});*/


router.route('/')
  .get((req,res) => {
      User.find((err, users)=> {
        if(err){
          res.send(err);
        }
        res.send(users);
      })
  })
  .post((req, res) => {
    var user = new User();

    user.pseudo = req.body.pseudo;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save((err) => {
      if(err){
        res.send(err);
      }
      res.send({ message: 'User created' });
    })
  });

router.route('/:user_id')
    .get((req, res) => { 
      User.findOne({ _id: req.params.user_id }, (err, user) => {
          if(err){
            res.send(err);
          }
          res.send(user); 
        })
    })

    .put((req, res) => {
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
      })

    .delete((req, res) => {
        User.remove({ _id : req.params.user_id}, err => {
          if(err){
            res.send(err);
          }
          res.send({message: 'User deleted'});
        })
    });
module.exports = router;