const fetchMuni = require('../utils/fetch-muni')

function VehiclesController (req, res) {
  fetchMuni({
    command: 'vehicleLocations',
    r: req.params.route,
    t: 0
  }).then(resp => {
    res.json({
      vehicles: resp.vehicle.map(v => {
        const vehicle = {
          id: parseInt(v.id, 10),
          routeTag: v.routeTag,
          secsSinceReport: Number(v.secsSinceReport),
          predictable: v.predictable === 'true',
          position: {
            lat: Number(v.lat),
            lng: Number(v.lon)
          },
          heading: Number(v.heading),
          speedKmHr: Number(v.speedKmHr),
          leadingVehicleId: parseInt(v.leadingVehicleId, 10)
        }

        if (v.dirTag) {
          vehicle.direction = v.dirTag.match(/_I_/) ? 'inbound' : 'outbound'
        }
        return vehicle
      })
    })
  }).catch(console.log)
}

module.exports = VehiclesController
