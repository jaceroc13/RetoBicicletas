const mongoose = require('mongoose');

const LoginSchema = mongoose.Schema({
    
    idfirebase: {
        type: String,
        require: true
    },
    
  
});

module.exports = mongoose.model('Estado', LoginSchema);