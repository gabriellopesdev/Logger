import express from 'express'
import logOperacao from '../controller/logOperacao'
import logErro from '../controller/logErro'

const router = express.Router()

router.post('/logOperacao', logOperacao.cadastraLog)

router.post('/logErro', logErro.cadastraLog)

module.exports = router