const https = require('https')

module.exports = settings => {
  if (!settings.listings.discordlabs) {
    return
  }
  let data = JSON.stringify({
    'server_count': settings.servercount || 0,
    'shard_count': settings.shardscount || 0,
  });
  let options = {
    hostname: 'bots.discordlabs.org',
    port: 443,
    path: `/v2/bot/${settings.clientid}/stats`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
      'Authorization': settings.listings.discordlabs                            
    }
  }
  const req = https.request(options, (res) => {
    if (res.statusCode === 200) {
      if(settings.output == true){
        console.log('[discordlabs] Post success!')
      }
    } else {
      console.log(`[discordlabs] An error occured: ${res.statusCode}, ${res.statusMessage}`)
    }
  })
  req.on('error', (error) => {
    console.log(error)
  })
  req.write(data)
  req.end()
};
