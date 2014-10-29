var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');


//Conexión a la BBDD
    mongoose.connect('mongodb://localhost/seriestv', function(err, res){
    	if (err) console.log('ERROR:Conectando a la BD:'+ err);
    	else console.log('Conectado a la Base de Datos');

    });
var models = require('./seriestv')(app, mongoose);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
   res.send("Hello World! \n  	Esto por Fin está funcionando!!!");
});

app.use(router);


  app.listen(3000, function() {
  console.log("Node server funcionando en  http://localhost:3000");
 routes =require ('./routes.js') (app);
});
