import express from 'express'
import routes from './route/logRoutes'
import status from 'http-status'

const app = express()
app.use(express.json())
app.use('/api', routes)   
app.use((request, response, next) => {
    response.status(status.NOT_FOUND).send()
})

app.use((error, request, response, next) => {
    response.status(status.INTERNAL_SERVER_ERROR).json({ error })
})

app.listen(3000, () => {
  console.log('Servidor online em: 3000')
})