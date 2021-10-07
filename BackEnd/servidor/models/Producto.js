const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    
    color: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    longitud: {
        type: String,
        required: true
    },
    latitud: {
        type: String,
        required: true
    },
  
});

module.exports = mongoose.model('Producto', ProductoSchema);