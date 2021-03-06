const express = require('express');
const routes = require("./routes")
const app = express();
const bodyParser = require('body-parser')
const session = require("express-session");
const volleyball = require("volleyball")
const cookieParser = require('cookie-parser');
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const { User } = require('./models')
const db = require("./db")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname + "/public"))

app.use(volleyball)

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({where: {username:username}})
    .then(user => {
      if(!user){
        return done(null,false,{message:'incorrect username'})
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    })
    .catch(done)
  })
)

passport.serializeUser(function(user,done){
  done(null,user)
})

passport.deserializeUser(function(id,done){
  User.findByPk(id)
  .then((user)=>done(null,user))
})

app.use('/api', routes);
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/public/' + 'index.html')
})

app.use((err, req, res, next)=>{
    res.status(500).send("error")
  })

db.sync({force: false})
  .then(()=>{app.listen(3000, function (){console.log('OMDB listening on port 3000!')})})


module.exports = app;