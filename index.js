const http = require('https'); // or 'https' for https:// URLs
const fs = require('fs');
var cors = require('cors')
const tiktok = require("tiktok-scraper-without-watermark");
const { UploadFileUgu, TelegraPh, floNime } = require('./lib/uploader')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080
app.set('json spaces', 2)
app.use(bodyParser.json());
app.use(cors())
app.get('/',(req, res) => {
let url = req.query.url
if(!url) return res.send('Nope')
tiktok
  .tiklydown(url)
  .then((result) => {
    console.log(result);
   res.json(result)
   
})
  .catch((e) => console.log(e));
})
app.listen(port, () => {
  console.log(`ok : ${port}`)
})
