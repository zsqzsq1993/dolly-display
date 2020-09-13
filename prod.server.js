const express = require('express')
const https = require('https')
const fs = require('fs')
const credentail = {
  cert: fs.readFileSync('/etc/nginx/1_dollylosingweight.today_bundle.crt'),
  key: fs.readFileSync('/etc/nginx/2_dollylosingweight.today.key')
}

const app = express()

const port = 8999

app.use(express.static('./dist'))

const httpsServer = https.createServer(credentail, app)

httpsServer.listen(port, () => {
  console.log(`https://listen on localhost:${port}`)
})
