# discord-lister
An all-in-one poster for bot stats. Supports the following bot listing services:
- top.gg
- discord.bots.gg
- discord.boats
- bots.ondiscord.xyz
- botsfordiscord.com
- botlist.space
- topcord.xyz
- discordextremelist.xyz
- discordbotlist.com
- sentcord.com
- dbots.co
- bots.discordlabs.org

### Example
``` js
const botlist = require('discord-lister');

let settings = {
  listings: {
    topgg: "", // TOKEN HERE
    discordbotsgg: "", // TOKEN HERE
    discordboats: "", // TOKEN HERE
    botsondiscord: "", // TOKEN HERE
    botsfordiscord: "", // TOKEN HERE
    botlistspace: "", // TOKEN HERE
    topcord: "", // TOKEN HERE
    discordextremelist: "", // TOKEN HERE
    discordbotlist: "", // TOKEN HERE
    sentcord: "", // TOKEN HERE
    dbotsco: "", // TOKEN HERE
    discordlabs: "" // TOKEN HERE
  },
  clientid: "CLIENT ID HERE", // REQUIRED
  servercount: 0, // Integer
  shardscount: 0, // Integer
  shardsid: 0, // Integer
  usercount: 0 , // Integer
  output: false // Boolean

}

botlist.post(settings)
```
### Requests to add new bot lists?
Send a Pull Request of your fork with the latest version of the repo and add the bot list at *post*.

### Changelog
## Update 1.3.0
Added New Bot Lists
- Added discordextremelist.xyz
- discordbotlist.com
- sentcord.com

## Update 1.2.8
Replaced Bot Lists
- Added TopCord.xyz

## Update 1.2.7
Replaced Bot Lists
- Removed Divine Discord Bots
- Added Output setting for you to disable console.log output

## Update 1.2.6
Replaced Bot Lists
- top.gg

## Update 1.2.0
Added New Bot Lists
- botsfordiscord.com
- botlist.space
- divinediscordbots.com

## Update 1.1.2
Fixed Error on botsondiscord settings

## Update 1.1.1
Added bots.ondiscord.xyz
