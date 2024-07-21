const express = require('express')
const app = express()
const port = 3000

const cardData = require('./cards.json')

app.get('/cards', (req, res) => {
  return res.json(cardData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})