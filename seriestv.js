var mongoose = require('mongoose');
    Schema   = mongoose.Schema;

var seriestvSchema = new Schema({
  Título:    { type: String },
   year:     { type: Number },
  País:  { type: String },
  Afiche:   { type: String },
  resumen:   { type: String },
  temporadas:  { type: Number },
  género:    { 
    type: String,
     enum: ['Drama', 'Fantasy', 'Sci-Fi', 'Thriller', 'Action', 'Comedy']
        },
  resumen:  { type: String }    
});

 module.exports = mongoose.model('seriestv', seriestvSchema);
