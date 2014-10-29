
module.exports = function(app) {
	var Serietv=require('./seriestv');

	//GET-return all seriestv in the DB
	findALLseriestv=function(req,res) {
		Serietv.find(function(err, seriestv){
			if(!err) res.send(seriestv);
			else console.log ('ERROR:'+err);
		});
	};

	//GET-Return a Tv SHow with a specified ID
	findById=function(req,res){
		Serietv.findById(req.params.id, function(err, serietv){
			if(!err) res.send(serietv);
			else console.log ('ERROR:'+err);
		});
	};

	//POST-Inserta una nueva serie de tv a la BBBDD
	addSerietv=function(req, res){
		console.log('POST');
		console.log(req.body);
		var serietv= new Serietv({
			Título:req.body.Título,
			temporadas:req.body.temporadas,
			género:req.body.género,
			país:req.body.país,
			year:req.body.year,
			Afiche:req.body.Afiche});

		serietv.save(function(err){
			if(!err) console.log('Serie Creada!');
			else console.log('ERROR' +err);
		});

		res.send(serietv);
	};

	//PUT-Actualizamos un registro ya existente
	updateSerietv=function(req,res) {
		Serietv.findById(req.params.id, function(err,serietv){
			serietv.Título=req.body.Título;
			serietv.temporadas=req.body.temporadas;
			serietv.género=req.body.género;
			serietv.país=req.body.país;
			serietv.year=req.body.year;
			serietv.Afiche=req.body.Afiche;

            serietv.save(function(err){
			   if(!err) console.log('Serie Actualizada!');
			   else console.log('ERROR:' +err);

  
	     	})

		
		});

	};

	//DELETE

	deleteSerietv=function(req,res){
		Serietv.findById(req.params.id, function(err, serietv){        
			serietv.remove(function(err){
				if(!err) console.log('Serie Borrada!');
		        else console.log('ERROR'  +err);
			})
			
		});
	};

     //API ROUTES

     app.get('/seriestv', findALLseriestv);
     app.get('/seriestv/:id', findById);
     app.post('/seriestv', addSerietv);
     app.put('/seriestv/:id', updateSerietv);
     app.delete ('/seriestv/:id', deleteSerietv);

}
