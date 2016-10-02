const fetchMuni = require('../utils/fetch-muni')
function StopsController (req, res) {
  // Fetch the data
  fetchMuni({
    command: 'routeConfig',
    route: req.params.route
  })
    .then(resp => {
      const route = {
        tag: resp.route.tag,
        title: resp.route.title,
        stops: resp.route.stop.map(stop => {
          return {
            tag: Number(stop.tag),
            title: stop.title,
            position: {
              lat: Number(stop.lat),
              lng: Number(stop.lon)
            }
          }
        }),
        paths: resp.route.path.map(path => {
          return {

          }
        })
      }
      res.json(route)
    })
    .catch(console.log)
}

module.exports = StopsController
