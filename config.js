const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

module.exports = {
  'dbUrl': `mongodb://${process.env.USER_DB}:${process.env.PASSWORD_DB}@ds155130.mlab.com:55130/deissshop`,
}
