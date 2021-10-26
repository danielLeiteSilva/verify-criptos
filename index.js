require('dotenv/config');
const express = require('express')
const wokeDyno = require('woke-dyno')
const cors = require('cors')
const app = express()
const router = require("./src/router.js")
const port = process.env.PORT || 8080
app.use(cors())
app.use(router)
app.listen(port, () => {
    wokeDyno({
        url: "http://localhost:8080",
        interval: 60000
    }).start()
    console.log('Connect in server', port)
})