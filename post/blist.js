const https = require('https')

module.exports = settings => {
  if (!settings.listings.blist) {
    return
  }
  let data = JSON.stringify({
    'server_count': settings.servercount || 0,
    'shard_count': settings.shardscount || 0
  });
  let options = {
    hostname: 'blist.xyz',
    port: 443,
    path: `/api/v2/bot/${settings.clientid}/stats/`,
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
      'Authorization': settings.listings.blist
    }
  }
  const req = https.request(options, (res) => {
    if (res.statusCode === 200) {
      if(settings.output == true){
        console.log('[blist.xyz] Post success!')
      }
    } else {
      console.log(`[blist.xyz] An error occured: ${res.statusCode}, ${res.statusMessage}`)
    }
  })
  req.on('error', (error) => {
    console.log(error)
  })
  req.write(data)
  req.end()
};
