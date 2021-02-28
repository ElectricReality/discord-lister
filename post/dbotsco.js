const https = require('https')

module.exports = settings => {
  if (!settings.listings.dbotsco) {
    return
  }
  let data = JSON.stringify({
    'guildCount': settings.servercount || 0
  });
  let options = {
    hostname: 'dbots.co',
    port: 443,
    path: `/api/v1/bots/${settings.clientid}/stats`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
      'Authorization': settings.listings.dbotsco
    }
  }
  const req = https.request(options, (res) => {
    if (res.statusCode === 200) {
      if(settings.output == true){
        console.log('[dbots.co] Post success!')
      }
    } else {
      console.log(`[dbots.co] An error occured: ${res.statusCode}, ${res.statusMessage}`)
    }
  })
  req.on('error', (error) => {
    console.log(error)
  })
  req.write(data)
  req.end()
};
