const { requestDataJson } = require("../services/Request")

const start = (request, response) => {
    response.status(200).send({ connected: true })
}

const coinsSupplySmall = async (request, response) => {

    console.log(request.query)

    const resultCoinsRequest = await requestDataJson(process.env.URL_REQUEST)

    const coinsDataAnalises = resultCoinsRequest['data']
        .filter(filterPrice => filterPrice['quote']['BRL']['price'] <= request.query.price)
        .filter(filterSupply => filterSupply['max_supply'] <= request.query.supply)
        .filter(filterNoNull => filterNoNull['max_supply'] !== null)
        .filter(filterNoNull => filterNoNull['max_supply'] !== 0)
        .filter(filterNoNull => filterNoNull['max_supply'] !== "")
        .filter(filterNoNull => filterNoNull['max_supply'] !== undefined)
    // console.log(coinsDataAnalises)

    response.status(200).json({ resultCoinsFilter: coinsDataAnalises })

}

module.exports = {
    coinsSupplySmall,
    start
}