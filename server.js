const express = require('express');
const app = express()

app.get('/', (req, res) => {
  res.send(require('/app/html.js'))
})

app.listen(process.env.PORT)
