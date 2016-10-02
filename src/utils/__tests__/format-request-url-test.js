import test from 'ava'
import formatRequestUrl from '../format-request-url'

test('formatUrl takes a command', t => {
  t.is(
    formatRequestUrl({
      command: 'routeList'
    }),
    'http://webservices.nextbus.com/service/publicXMLFeed?a=sf-muni&command=routeList'
  )
})

test('formatUrl takes a routeConfig command', t => {
  t.is(
    formatRequestUrl({
      command: 'routeConfig',
      route: 'N'
    }),
    'http://webservices.nextbus.com/service/publicXMLFeed?a=sf-muni&command=routeConfig&route=N'
  )
})
