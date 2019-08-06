# discord-lister
An all-in-one poster for bot stats. Supports the following bot listing services:
- discordbots.org
- discord.bots.gg

### Example
``` js
const botlist = require('discord-lister');

let settings = {
  discordbotsorg: {
    enabled: true, // Required
    token: 'Discord Bots Org Token Here'
  },
  discordbotsgg: {
    enabled: true, // Required
    token: 'Discord Bots GG Token Here',
    client_id: 'Bot ID here'
  },
  servercount: 0, // Required, set to 0 if not needed
  shardscount: 0, // Required, set to 0 if not needed
  shardsid: 0 // Required, set to 0 if not needed
}

botlist.post(settings)
```
