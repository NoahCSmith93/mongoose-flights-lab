const express = require('express');
const router = express.Router();
const flightsCtrl = require("../controllers/flights")

// NEW route
router.get("/new", flightsCtrl.new)
// CREATE route
router.post("/", flightsCtrl.create)
// INDEX
router.get("/", flightsCtrl.index)
// SHOW
// EDIT
// UPDATE
// DELETE

module.exports = router;
