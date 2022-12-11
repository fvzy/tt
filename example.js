const tiktok = require('.')
const url = 'https://www.tiktok.com/@volcogot/video/7166457236246580482?is_from_webapp=1&sender_device=pc'

tiktok.tiktokdownload(url)
     .then(result => {
          console.log(result)
     })
     .catch(e => console.log(e))
