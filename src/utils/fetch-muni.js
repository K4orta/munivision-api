const axios = require('axios')
const requestUrl = require('./format-request-url')
const parser = require('xml2json')

function fetchMuni (command) {
  return axios.get(requestUrl(command)).then(resp => {
    return parser.toJson(resp.data, {object: true}).body
  })
}

module.exports = fetchMuni
