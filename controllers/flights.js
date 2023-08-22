const Flight = require("../models/flight")

module.exports = {
    index,
    new: newFlight,
    create
}

function index(req, res) {
    Flight.find({})
        .then(flightDocs => {
            res.render("flights/index", { flights: flightDocs})
        })
        .catch(err => {
            console.log("====err====")
            console.log(err)
            console.log("====err====")
            res.send("err creating - check terminal")
        })
}

function newFlight(req, res) {
    res.render("flights/new", { errorMsg: ""})
}

function create(req, res) {
    Flight.create(req.body)
        .then(function() {
            res.redirect("/flights")
        })
        .catch(err => {
            console.log("====err====")
            console.log(err)
            console.log("====err====")
            res.send("err creating - check terminal")
        })
}