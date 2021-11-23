const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', async function(msg) {
  if (msg.content.startsWith('?ping')) {
    msg.channel.send("xd");
    
  }
});
