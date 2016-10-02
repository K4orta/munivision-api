import test from 'ava'
import app from '../../app'
import request from 'supertest'
import stopsStub from './stops-stub'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import formatUrl from '../../utils/format-request-url'

test.beforeEach(t => {
  t.context = new MockAdapter(axios)
  t.context
    .onGet(formatUrl({
      command: 'routeConfig',
      route: 'N'
    }))
    .reply(200, stopsStub)
})

test.afterEach(t => t.context.restore())

test.cb('Can get stops route', t => {
  request(app())
    .get('/stops/N')
    .expect(200, t.end)
})

test.cb('Stops route returns a line', t => {
  request(app())
    .get('/stops/N')
    .expect(resp => {
      t.is(resp.body.title, 'N-Judah')
    })
    .expect(200, t.end)
})

test.cb('Stops route returns a list of stops', t => {
  request(app())
    .get('/stops/N')
    .expect(resp => {
      t.is(resp.body.stops.length, 66)
      const stop = resp.body.stops[0]
      t.is(stop.title, 'Duboce Ave & Church St')
      t.deepEqual(stop.position, {
        lat: 37.7694699,
        lng: -122.42941
      })
    })
    .expect(200, t.end)
})

test.cb('Stops route returns a list of paths', t => {
  request(app())
    .get('/stops/N')
    .expect(resp => {
      t.is(resp.body.paths.length, 17)
      const path = resp.body.paths[0]
    })
    .expect(200, t.end)
})

