function toQuery (params) {
  return Object.keys(params).map(k => `${k}=${params[k]}`).join('&')
}

function formatRequestUrl (options) {
  return `http://webservices.nextbus.com/service/publicXMLFeed?a=sf-muni&${toQuery(options)}`
}

module.exports = formatRequestUrl
