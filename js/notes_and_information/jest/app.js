const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Everything worked."
    })
})

app.post('/api/user', (req, res) => {
    const tmpUser = {
        id: '001',
        name: `${req.body.firstName} ${req.body.lastName}`
    }
    // 201 - Created
    res.status(201).json(tmpUser)
})

module.exports = app