import Mongod from '../config/db'
import { logErroModel } from '../model/logErro'
import status from 'http-status'

exports.cadastraLog = (request, response, next)  => {   
    Mongod.Conectar().then(() => {  
        let tempLog = {  
            recurso: request.body.recurso,
            mensagemErro: request.body.mensagemErro,
            corpoResquisicao: request.body.corpoResquisicao,
            tempoResposta: request.body.tempoResposta,
            urlOrigem: request.body.urlOrigem
        };  
    
        response.status(status.CREATED).json(tempLog) ; 
        var data = new logErroModel(tempLog);  
        data.save().then(() => {
            Mongod.Desconectar();
            response.status(status.CREATED).send()
        }).catch((error) => next(error));
        
    });   
}

exports.Ping = (request, response, next) => {
    let result = 'Pong';    
    response.status(status.OK).json({result})
}

