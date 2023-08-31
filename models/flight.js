const mongoose = require("mongoose")
const Schema = mongoose.Schema

const destinationsSchema = new Schema({
    airport: {
        type: String,
        enum: ["AUS", "DWF", "DEN", "LAX", "SAN"]
    },
    arrival: Date
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ["American", "Southwest", "United"]
    },
    airport: {
        type: String,
        enum: ["AUS", "DWF", "DEN", "LAX", "SAN"],
        default: "DEN"
    },
    flightNo: {
        type: Number,
        required: true
    },
    departs: {
        type: Date,
        default: () => {
            const yearPlusOne = new Date()
            yearPlusOne.setFullYear(yearPlusOne.getFullYear() + 1)
            return yearPlusOne
        }
        // required: true
    },
    destinations: [destinationsSchema]
})


module.exports = mongoose.model("Flight", flightSchema)