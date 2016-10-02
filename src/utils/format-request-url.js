
function formatRequestUrl (options) {
  return `http://webservices.nextbus.com/service/publicXMLFeed?command=${options.command}&a=sf-muni`
}

module.exports = formatRequestUrl
