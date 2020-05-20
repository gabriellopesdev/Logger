import Mongod from '../config/db'
import { logOperacaoModel } from '../model/logOperacao'
import status from 'http-status'

exports.cadastraLog = (request, response, next)  => {   
    Mongod.Conectar().then(() => {  
        let tempLog = {
            recurso: request.body.recurso,
            verbo: request.body.verbo,
            corpoResquisicao: request.body.corpoResquisicao,
            tempoResposta: request.body.tempoResposta,
            urlOrigem: request.body.urlOrigem,
            httpStatus: request.body.httpStatus
        };  
    
        response.status(status.CREATED).json(tempLog) ; 
        var data = new logOperacaoModel(tempLog);  
        data.save().then(() => {
            Mongod.Desconectar();
            response.status(status.CREATED).send()
        }).catch((error) => next(error));
        
    });   
}



