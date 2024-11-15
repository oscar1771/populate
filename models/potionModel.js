// Cargamos el módulo de mongoose
const mongoose = require('mongoose');

// Usaremos los esquemas
const { Schema } = mongoose;

// Creamos el objeto del esquema y sus atributos
const potionSchema = new Schema({
   name: String,
   description: String,
   value: Number

});

// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Potion', potionSchema);

