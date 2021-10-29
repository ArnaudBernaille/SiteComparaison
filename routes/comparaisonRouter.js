const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Comparaison = require('../models/comparaison');

const comparaisonRouter = express.Router();

comparaisonRouter.use(bodyParser.json());

comparaisonRouter.route('/')
.all((req,res,next)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	next(); // On met next pour pouvoir passer d'autre fonction, par exemple pour get et post se sont celles que nous avons mis en dessous. 
}) // Lorsque l'on met un all, peut importe la méthode (get, post, put, delete) c'est ce code qui va être executé si on appel dishes.


// Si jamais notre API possede plein d'entrée alors notre index.js risque d'exploser. On peut donc crée plein de fichier express puis ensuite les combiner
// Ces fichiers combiner donneront notre API générale. => Pour cela on utilise "express router".
.get((req, res, next) => {
	console.log("On vient de faire une requete get");
	Comparaison.find({})
	.then((comp) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(comp);
	}, (err) => next(err))
	.catch((err) => next(err));
}) // Si on a une requete get, le all va d'abord être appelé puis celle là. C'est dû au next de la fonction all d'en haut mais je comprend pas bien. 

.post((req, res, next) => {
	Comparaison.create(req.body)
    .then((comp) => {
        console.log('comparaison Created ', comp);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(comp);
    }, (err) => next(err))
    .catch((err) => next(err));
})

.put((req, res, next) => {
	res.statusCode = 403;
	res.end('Put not supported for leaderRouter');
})

.delete((req, res, next) => {
	res.end('Deleting all the leader');
})

// Suporting the id
comparaisonRouter.route('/:comparaisonId')
.get( (req, res, next) => {
	console.log("On vient de faire une requete get sur l'id : ", req.params.comparaisonId);
	Comparaison.findById(req.params.comparaisonId)
	.then((comp) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(comp);
	}, (err) => next(err))
	.catch((err)=> next(err));
})

module.exports = comparaisonRouter;

