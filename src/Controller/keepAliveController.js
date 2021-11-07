module.exports = keepAlive = (request, response) => {
    response.status(200).send({ connected: true })
}