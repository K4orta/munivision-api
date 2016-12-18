import test from 'ava'
import lastRequestCache from '../last-request-cache'

test.beforeEach(r => {
  lastRequestCache.init()
})

test('Returns 0 when called with a new route', t => {
  t.is(lastRequestCache.get('N'), 0)
})

test('Returns the last time when called  route', t => {
  lastRequestCache.set('N', 555)
  t.is(lastRequestCache.get('N'), 555)
})
