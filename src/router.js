const Router = require('express').Router()

//Controllers
const { coinsSupplySmall } = require("./Controller/VerifySupplyController")
const keepAlive = require("./Controller/keepAliveController")


Router.get("/", keepAlive)
Router.get("/coins/supply", coinsSupplySmall)

module.exports = Router