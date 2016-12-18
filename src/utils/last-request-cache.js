let cache = {}

function init () {
  cache = {}
}

function get (route) {
  if (!cache[route]) {
    return 0
  }
  return cache[route]
}

function set (route, time) {
  cache[route] = time
}

module.exports = {
  init,
  get,
  set
}
