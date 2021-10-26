const Router = require('express').Router()
const { coinsSupplySmall, start } = require("./controller/Controller")

Router.get("/", start)
Router.get("/coins/supply", coinsSupplySmall)

module.exports = Router