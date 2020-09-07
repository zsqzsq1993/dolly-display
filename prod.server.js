const express = require('express')

const app = express()

const port = 8999

app.use(express.static('./dist'))

app.listen(port, () => {
  console.log(`listen on localhost:${port}`)
})
