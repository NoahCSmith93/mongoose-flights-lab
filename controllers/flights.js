const Flight = require("../models/flight")
const Ticket = require("../models/ticket")

module.exports = {
    index,
    new: newFlight,
    create,
    show
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
            // console.log("Request body:\n", req.body)
            res.redirect("/flights")
        })
        .catch(err => {
            console.log("====err====")
            console.log(err)
            console.log("====err====")
            res.send("err creating - check terminal")
        })
}

function show(req, res) {
    Flight.findById(req.params.id)
        .then(flight => {
            Ticket.find({flight: flight._id})
                .then(tickets => {

                res.render("flights/show", { tickets, flight })
            })
            .catch(err => {
                console.log("====err====")
                console.log(err)
                console.log("====err====")
                res.send("err creating - check terminal")
            })
        })
        .catch(err => {
            console.log("====err====")
            console.log(err)
            console.log("====err====")
            res.send("err creating - check terminal")
        })
}