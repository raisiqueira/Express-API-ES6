import express from 'express'
import path from 'path'
import logger from 'morgan'
import bodyParser from 'body-parser'
import routes from './routes'

// Application
const app = express()

// Disable X-Powered By header
app.disable('x-powered-by')

// Logger
app.use(logger('dev', {
  skip: () => app.get('env') === 'test'
}))

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Routes
app.use('/', routes)

// Cath 404
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Error Handler
app.use((res, req, next) => {
  res.status(err.status || 500).send({
    'menssage': 'Error!',
    'status': res.statusCode
  })
})

export default app
