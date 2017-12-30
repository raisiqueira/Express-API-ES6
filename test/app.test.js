process.env.NODE_ENV = 'test'

import request from 'supertest'
import app from '../src/app'

describe('GET /', () => {
  it('Render index path', async () => {
    await request(app).get('/').expect(200)
  })
})
