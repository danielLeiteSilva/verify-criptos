const keepAlive = (request, response) => {
    response.status(200).send({ connected: true })
}
module.exports = keepAlive