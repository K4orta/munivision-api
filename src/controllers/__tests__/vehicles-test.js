import test from 'ava'
import app from '../../app'
import request from 'supertest'
import vehiclesStub from './vehicles-stub'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import formatUrl from '../../utils/format-request-url'

test.beforeEach(t => {
  t.context = new MockAdapter(axios)
  t.context
    .onGet(formatUrl({command: 'vehicleLocations', r: 'N', t: 0}))
    .reply(200, vehiclesStub)
})

test.afterEach(t => {
  t.context.restore()
})

test.cb('Can get vehicles route', t => {
  request(app())
    .get('/vehicles/N')
    .expect(200, t.end)
})

test.cb('Returns a list of vehicles', t => {
  request(app())
    .get('/vehicles/N')
    .expect(({body}) => {
      t.is(body.vehicles.length, 26)
    })
    .expect(200, t.end)
})

test.cb('Vehicle is in the forrect format', t => {
  request(app())
    .get('/vehicles/N')
    .expect(({body}) => {
      const testVehicle = body.vehicles[0]
      t.deepEqual(testVehicle.position, {
        lat: 37.77963, lng: -122.38995
      })
      t.is(testVehicle.id, 1486)
      t.is(testVehicle.direction, 'inbound')
    })
    .expect(200, t.end)
})
