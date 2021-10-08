const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({

    usuario: {
        type: String,
        required: false
    },
    
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
    estado: {
        type: Boolean,
        default: false
    }
  
});

module.exports = mongoose.model('Producto', ProductoSchema);