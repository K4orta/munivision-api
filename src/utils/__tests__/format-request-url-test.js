import test from 'ava'
import formatRequestUrl from '../format-request-url'

test('formatUrl Takes a command', t => {
  t.is(
    formatRequestUrl({
      command: 'routeList'
    }),
    'http://webservices.nextbus.com/service/publicXMLFeed?command=routeList&a=sf-muni'
  )
})
