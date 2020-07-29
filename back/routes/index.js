const express = require('express');
const router = express.Router();
const { User, Favorite } = require('../models')
const passport = require('passport')

router.post("/login", passport.authenticate("local"), (req, res, next)=>{
    res.json(req.user)
})

router.post("/register", (req, res, next)=>{
  User.create(req.body)
    .then((user)=>res.json(user))
})

router.get("/users", (req, res, next)=>{
  User.findAll()
   .then(users=>res.json(users))
})

router.get("/logout", function (req, res, next) {
  req.logout();
  res.sendStatus(200)
});

router.post("/favorites/add", (req,res,next)=>{
  User.findByPk(req.body.userId)
  .then((userFound)=>{
    const user = userFound 
    Favorite.create({
      title: req.body.title,
      imdbID: req.body.id
    })
    .then((favCreated)=>{
      user.addFavorite(favCreated)
      favCreated.setUser(user)
      res.json(favCreated)
    })
  })
})

router.get("/users/:id/favorites", (req, res, next)=>{
  Favorite.findAll({
    where: {userId: req.params.id}
  })
  .then((movies)=>res.json(movies))
})

router.post("/favorites/delete", (req, res, next)=>{
  Favorite.destroy({
    where: {
      imdbID: req.body.id,
      userId: req.body.userId
    }
  })
  .then(()=>Favorite.findAll({
    where: { userId: req.body.userId }
  })
  .then((movies)=>res.status(200).json(movies))
  )
})

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
      next()
    } else {
      res.status(401).redirect('/auth/login')
    }
  }

module.exports = router