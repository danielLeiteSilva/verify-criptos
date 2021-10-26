const request = require("request")
const { convertJson } = require("../utils/Utils")

const requestDataJson = async (url) => {
    try {
        return new Promise((resolve, reject) => {
            const options = {
                headers: {
                    "X-CMC_PRO_API_KEY": process.env.API_KEY,
                    "Accept": "application/json"
                }
            }
            request.get(url, options, (error, response, body) => {
                if (response.statusCode == 200) {
                    if (!error) {
                        return resolve(convertJson(body))
                    }
                }
            })
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    requestDataJson
}