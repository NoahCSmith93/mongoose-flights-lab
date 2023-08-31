const Ticket = require("../models/ticket")

module.exports = {
    create
}

function create(req, res) {
    Ticket.create(req.body)
        .then(function() {
            res.redirect("back")
        })
        .catch(err => {
            console.log("====err====")
            console.log(err)
            console.log("====err====")
            res.send("err creating - check terminal")
        })
}