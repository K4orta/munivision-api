import test from 'ava'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import fetchMuni from '../fetch-muni'

test.beforeEach(t => {
  t.context = new MockAdapter(axios)
  t.context.onGet('http://webservices.nextbus.com/service/publicXMLFeed?command=routeList&a=sf-muni')
    .reply(200,
    `<?xml version="1.0" encoding="utf-8" ?>
      <body>
        <route tag="F" title="F-Foo"/>
        <route tag="B" title="B-Bar"/>
      </body>`)
})

test.afterEach(t => {
  t.context.restore()
})


test.cb('fetchMuni can get a resource from the server', t => {
  t.plan(1)
  const request = fetchMuni({command: 'routeList'})
  t.notThrows(request)

  request
    .then(() => t.end())
    .catch(() => t.end())
})

test.cb('fetchMuni returns json', t => {
  t.plan(1)
  fetchMuni({command: 'routeList'})
    .then(resp => {
      t.deepEqual(resp, {route: [
        {tag: 'F', title: 'F-Foo'},
        {tag: 'B', title: 'B-Bar'}]
      })
    })
    .then(() => t.end())
    .catch(() => t.end())
})
