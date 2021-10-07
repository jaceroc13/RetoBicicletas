const mongoose = require('mongoose');

const EstadoSchema = mongoose.Schema({
    
    estado: {
        type: Boolean,
        default:false
    },
    
  
});

module.exports = mongoose.model('Estado', EstadoSchema);