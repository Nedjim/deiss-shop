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

UserSchema.statics.authenticate =  (pseudo, password, callback) => {
    
    User.findOne({pseudo: pseudo, password:password})
        .exec((error, user) => {
            if(err) {
                return callback(err);
            }
            else if (!user) {
                var err = new Error('User not found');
                err.status = 401;
                return callback(err); 
            }
            return callback(null, user);
           /* bcrypt.compare(password, user.password, (err, result) => {
                if(result === true){
                    return callback(null, user)
                } 
                else {
                    return callback()
                }
            })*/
       })
}
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