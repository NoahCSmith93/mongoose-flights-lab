// Require mongoose module
const mongoose = require('mongoose');

// Establish connection to the database
mongoose.connect(process.env.DATABASE_URL);

// Save connection info to a variable for easy access
const db = mongoose.connection

// Tell it what to do once connection is established
db.on("connected", function() {
    console.log(`Connected to MongoDb ${db.name} at ${db.host}:${db.port}`)
})

module.exports = mongoose