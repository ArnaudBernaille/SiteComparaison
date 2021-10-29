const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('../models/user');
var passport = require('passport');


const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter.route('/')
.all((req,res,next)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	next(); // On met next pour pouvoir passer d'autre fonction, par exemple pour get et post se sont celles que nous avons mis en dessous. 
}) // Lorsque l'on met un all, peut importe la méthode (get, post, put, delete) c'est ce code qui va être executé si on appel dishes.


userRouter.use(bodyParser.json());



userRouter.post('/signup', (req, res, next) => {
  User.register(new User({username: req.body.username}), 
    req.body.password, (err, user) => {
    if(err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
    }
    else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true, status: 'Registration Successful!'});
    }
  });
});

userRouter.post('/login', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({success: true, status: 'You are successfully logged in!'});
});

userRouter.get('/logout', (req, res) => {
  if (req.session) {
    res.clearCookie('session-id');
    res.redirect('/');
  }
  else {
    var err = new Error('You are not logged in!');
    err.status = 403;
    next(err);
  }
});

module.exports = userRouter;