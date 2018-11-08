const Discord = require('discord.js');
const MeeRcY = new Discord.Client();

console.log(".Online ");
 
MeeRcY.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
**WELCOME TO NoThing.   

**                                
                               [  https://discord.gg/ewbRn9T ] 
**  ... [ ${member}  ]
**`) 
}).catch(console.error)
})
MeeRcY.login(process.env.BOT_TOKEN);
