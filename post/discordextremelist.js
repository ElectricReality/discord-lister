const https = require('https')

module.exports = settings => {
  if (!settings.listings.discordextremelist) {
    return
  }
  let data = JSON.stringify({
    'guildCount': settings.servercount || 0,
    'shardCount': settings.shardscount || 0,
  });
  let options = {
    hostname: 'api.discordextremelist.xyz',
    port: 443,
    path: `/v2/bot/${settings.clientid}/stats`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
      'authorization': settings.listings.discordextremelist
    }
  }
  const req = https.request(options, (res) => {
    if (res.statusCode === 200) {
      if(settings.output == true){
        console.log('[discordextremelist.xyz] Post success!')
      }
    } else {
      console.log(`[discordextremelist.xyz] An error occured: ${res.statusCode}, ${res.statusMessage}`)
    }
  })
  req.on('error', (error) => {
    console.log(error)
  })
  req.write(data)
  req.end()
};
