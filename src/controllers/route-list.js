const fetchMuni = require('../utils/fetch-muni')
function RouteListController (req, res) {
  // Fetch the data
  fetchMuni({command: 'routeList'})
    .then(resp => {
      res.json(resp.route)
    })
    .catch(console.log)
}

module.exports = RouteListController
