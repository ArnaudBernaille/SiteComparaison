const express = require('express'); //Import the express dependency
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/siteComparaisonMax';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });


var comparaisonRouter =  require('./routes/comparaisonRouter.js');;
comparaisonRouter.use(bodyParser.json());

var userRouter =  require('./routes/users.js');;


const app = express(); //Instantiate an express app, the main work horse of this server
const port = 3000;  //Save the port number where your server will be listening

app.use(express.static(__dirname + '/public'));




// Authentification : 
var session = require('express-session');
var FileStore = require('session-file-store')(session);


cookieParser = require('cookie-parser');
app.use(cookieParser('12345-67890-09876-54321'));

app.use(session({
    name: 'session-id',
    secret: '12345-67890-09876-54321',
    saveUninitialized: false,
    resave: false,
    store: new FileStore()
  }));
  

/* 
app.use(passport.initialize());
app.use(passport.session());
*/

  
  

// Fin auth
//_____________


/*

function auth (req, res, next) {
    console.log(req.body.user);

    if (!req.body.user) {
      var err = new Error('You are not authenticated!');
      err.status = 403;
      next(err);
    }
    else {
        console.log("OK nous avons reçus la req");
          next();
    }
}

app.use(auth);
*/

app.use('/users', userRouter)
app.use('/comparaison', comparaisonRouter);

//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.get('/comparaisonPage', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('comparaisonP.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.get('/loginPage', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('loginPage.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});