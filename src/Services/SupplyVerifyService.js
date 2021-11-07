const request = require("request")
const { parseTextToJson } = require("../Utils/Utils")

const supplyRequestData = async (urlRequestSupply) => {
    try {
        return new Promise((resolve, reject) => {
            const optionsRequestSupply = {
                headers: {
                    "X-CMC_PRO_API_KEY": process.env.API_KEY,
                    "Accept": "application/json"
                }
            }
            request.get(urlRequestSupply, optionsRequestSupply, ( errorResponseInformacionCoins, responseInformacionSupplyCoins, bodyInformacionSupplyCoins) => {

                if (responseInformacionSupplyCoins.statusCode == 200) {
                    if (!errorResponseInformacionCoins) {
                        return resolve(parseTextToJson(bodyInformacionSupplyCoins))
                    }
                }
            })
        })
    } catch (ExceptionSupplyRequest) {
        console.log(ExceptionSupplyRequest)
    }
}

module.exports = {
    supplyRequestData
}