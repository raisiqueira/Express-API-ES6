import {Router} from 'express'

const routes = Router()

// Get Hello route

routes.get('/', (req, res) => {
  res.send({
    'menssage': 'Hello World 🌎',
    'status': res.statusCode
  })
})

export default routes
