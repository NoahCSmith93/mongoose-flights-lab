const Flight = require("../models/flight")

module.exports = {
    create
}

function create(req, res) {
    console.log("Destination create route got hit!")
    Flight.findById(req.params.id)
        .then(flightDoc => {
            flightDoc.destinations.push(req.body)
            return flightDoc
        })
        .then(flightDoc => {
            console.log("This is the flightDoc\n", flightDoc)
            flightDoc.save()
            return flightDoc
        })
        .then(flightDoc =>{
            res.redirect(`/flights/${flightDoc.id}`)
        })
        .catch(err => {
            console.log("====err====")
            console.log(err)
            console.log("====err====")
            res.send("err creating - check terminal")
        })
}