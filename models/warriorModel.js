
const Potion = require('./potionModel');
// Cargamos el módulo de mongoose
const mongoose = require('mongoose');

// Usaremos los esquemas
const { Schema } = mongoose;

// Creamos el objeto del esquema y sus atributos


const warriorSchema = new Schema({
  name: String,
  nickname: String,
  level: Number,
  equipment: {
    potion: { type: Schema.Types.ObjectId, ref: "Potion" },
    
  },
});

// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Warrior', warriorSchema);
