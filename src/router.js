const Router = require('express').Router()
const { coinsSupplySmall } = require("./controller/Controller")

Router.get("/coins/supply", coinsSupplySmall)

module.exports = Router