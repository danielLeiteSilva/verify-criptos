const parseTextToJson = (text) => {
    return JSON.parse(text)
}

const parseJsonToText = (json) => {
    return JSON.stringify(json)
}


module.exports = {
    parseTextToJson,
    parseJsonToText
}