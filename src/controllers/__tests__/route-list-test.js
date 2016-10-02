import test from 'ava'
import app from '../../app'
import request from 'supertest'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import formatUrl from '../../utils/format-request-url'
import routeStub from './route-list-stub'

test.beforeEach(t => {
  t.context = new MockAdapter(axios)
  t.context
    .onGet(formatUrl({command: 'routeList'}))
    .reply(200, routeStub)
})

test.afterEach(t => {
  t.context.restore()
})

test.cb('It returns a list of routes', t => {
  t.plan(1)
  request(app())
    .get('/route-list')
    .expect('Content-Type', /json/)
    .expect(({body}) => {
      t.is(body.length, 83)
    }).expect(200, t.end)
})
