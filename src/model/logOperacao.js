import Mongod   from '../config/db'

let Schema = Mongod.db.Schema;

let logOperacaoSchema = new Schema({
    recurso: {type: String},
    verbo: {type: String},
    corpoResquisicao: {type: String},
    tempoResposta: {type: Number},
    urlOrigem: {type: String},
    httpStatus: {type: Number}
},{  timestamps: { createdAt: 'datahoralog' } })

let logOperacaoModel = Mongod.db.model('logoperacao', logOperacaoSchema,'logoperacao');  

export { logOperacaoModel }