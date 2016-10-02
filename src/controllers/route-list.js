const fetchMuni = require('../utils/fetch-muni')
function RouteListController (req, res) {
  // Fetch the data
  fetchMuni({command: 'routeList'})
    .then(resp => {
      console.log(resp.data)
      res.json([])
    })
    .catch(console.log)
}

module.exports = RouteListController
