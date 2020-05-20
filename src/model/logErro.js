import Mongod  from '../config/db'

let Schema = Mongod.db.Schema;

let logErroSchema = new Schema({
    recurso: {type: String},
    mensagemErro: {type: String},
    corpoResquisicao: {type: String},
    tempoResposta: {type: Number},
    urlOrigem: {type: String}
},{ timestamps: { createdAt: 'datahoralog' } })


let logErroModel = Mongod.db.model('logerro', logErroSchema,'logerro');  

export { logErroModel }