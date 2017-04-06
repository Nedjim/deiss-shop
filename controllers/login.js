const mongoose      = require('mongoose');
//const User          = require('../models/user');

const get = (req, res, next) => {
    
    res.send('GET Login');
}

const post = (req, res, next) => {
   res.send('POST Login');
}

module.exports = {get, post};