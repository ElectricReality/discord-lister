const https = require('https')

module.exports = settings => {
  if (!settings.listings.sentcord) {
    return
  }
  let data = JSON.stringify({
    'serverCount': settings.servercount || 0,
    'shardCount': settings.shardscount || 0
  });
  let options = {
    hostname: 'sentcord.com',
    port: 443,
    path: `/api/bot/${settings.clientid}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
      'authorization': settings.listings.sentcord
    }
  }
  const req = https.request(options, (res) => {
    if (res.statusCode === 200) {
      if(settings.output == true){
        console.log('[sentcord.com] Post success!')
      }
    } else {
      console.log(`[sentcord.com] An error occured: ${res.statusCode}, ${res.statusMessage}`)
    }
  })
  req.on('error', (error) => {
    console.log(error)
  })
  req.write(data)
  req.end()
};
