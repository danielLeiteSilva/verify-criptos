const Router = require('express').Router()

//Controllers
const { coinsSupplySmall } = require("./Controllers/VerifySupplyController")
const twitterComments = require("./Controllers/VerifyCommentsTwitterController")
const keepAlive = require("./Controllers/keepAliveController")

//Endpoints
Router.get("/", keepAlive)
Router.get("/coins/supply", coinsSupplySmall)
Router.get("/coin/intent", twitterComments)

module.exports = Router