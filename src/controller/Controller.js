const { requestDataJson } = require("../services/Request")

const coinsSupplySmall = async (request, response) => {
    
    const resultCoinsRequest = await requestDataJson(process.env.URL_REQUEST)
    
    const coinsDataAnalises = []

    for(let valueResultCoin of resultCoinsRequest['data']){
        if(valueResultCoin['quote']['BRL']['price'] <= process.env.PRICE 
        && valueResultCoin['max_supply'] <= process.env.MAX_SUPPLY 
        && valueResultCoin['max_supply'] !== null){
            coinsDataAnalises.push(valueResultCoin)
        }
    }

    console.log(coinsDataAnalises)

    response.status(200).json({resultCoinsFilter: coinsDataAnalises})

}

module.exports = {
    coinsSupplySmall
}