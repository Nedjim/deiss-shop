var PORT              = process.env.PORT || 8080;
var path              = require('path');
var express           = require('express');
var bodyParser        = require('body-parser');
var mongoose          = require('mongoose');

var cookieParser      = require('cookie-parser');
var session           = require('express-session');


var api               = require('./routes/api');
var configDB          = require('./config.js');
var app               = express();
var Users             = require('./controllers/controlUsers');
var auth              = require('./controllers/auth');
var profile           = require('./controllers/profile');

// Heroku
if(process.env.NODE_ENV !== 'production') {
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpack = require('webpack');
  var config = require('./webpack.config');
  var compiler = webpack(config);
  
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

// Dossier static
app.use(express.static(path.join(__dirname, 'dist')));

// Application 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: "test", 
    resave: false, 
    saveUninitialized: true, 
    cookie: { secure: true }
}));

//Mongoose
mongoose.connect(configDB.dbUrl);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))

app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.use('/api', api); 
app.route('/create').post(Users.post);


app.route('/auth')
    .get(auth.get)
    .post(auth.post);

app.route('/profile')
    .get(profile.get)

//Port
app.listen(PORT, error => {
  if (error) {
    console.error(error);
  } else {
    console.info("http://localhost:%s/ in your browser.", PORT, PORT);
  }
});
