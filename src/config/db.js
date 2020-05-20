import mongoose from 'mongoose'
import {ConnectionString} from './config'

const MongoD = {

    db: mongoose,
    Conectar: function() {
      return  mongoose.connect(ConnectionString, 
            { useNewUrlParser: true, useUnifiedTopology: true  }).then(() => {  
        console.log('Banco de dados conectado')
        });
    },
    
    Desconectar: function(){
        mongoose.connection.close().then(() => {  
            console.log('Banco de dados desconectado')
            });
    }
}

module.exports = MongoD