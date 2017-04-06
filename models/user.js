var mongoose        = require('mongoose');
//var bcrypt          = require('bcrypt');

var UserSchema = new mongoose.Schema({
    pseudo : {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true, 
        required: true,
    },
    password: {
        type: String,
        required: true
    },
});

//Hash password
/*UserSchema.pre('save', next => {
    var user = this;
    bcrypt.hash(user.password, 10, (err, hash) => {
        if(err){
            return next(err);
        }
        user.password = hash;
        next();
    })
});*/

var User = mongoose.model('User', UserSchema);
module.exports = User;