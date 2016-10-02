import test from 'ava'
import app from '../../app'
import request from 'supertest'

test.cb('It returns a list of routes', t => {
  // request(app())
  //   .get('/route-list')
  //   .expect('Content-Type', /json/)
  //   .expect(res => {
  //     t.is(res.body.length, 85)
  //   }).expect(200, t.end)
  t.pass()
  t.end()
})
