const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + "\\index.html")
})

app.get('/style', (req, res) => {
res.sendFile(__dirname + "\\style.css")
})

app.get('/img', (req, res) => {
  res.sendFile(__dirname + "\\1.jpg")
})

app.post('/yees', function (req, res) {
  res.send('POST request to the homepage')
})

app.listen(3000)