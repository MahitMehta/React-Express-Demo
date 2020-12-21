const express = require('express')
const app = express()
const server = require('http').createServer(app)

const data = [{name: "Sam", age: 14}, {name: "Bob", age: 31}]

app.get('/api/user-data', (req, res) => {
    res.json(data)
})

const path = require('path')
app.use(express.static(path.join(__dirname, "/client/build")))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'))
})

const PORT = process.env.PORT || 5000
server.listen(PORT)