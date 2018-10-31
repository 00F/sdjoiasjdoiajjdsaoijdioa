const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
console.log("Discord Bot By So.?");
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')


});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (author) {
  return author.send(' ** حرام واحد جميل مثلك م يكون عندنا .. تنورنا  https://discord.gg/PzxfhCa ** ')

}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
