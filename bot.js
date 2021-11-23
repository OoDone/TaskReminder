const Discord = require('discord.js');
const client = new Discord.Client();

/*task name:
description/details:
when needed(due date):
*/
client.on('message', async function(msg) {
  if (msg.content.startsWith('?sendtask')) {
    var split;
    msg.channel.send("test");
    if(msg.content.includes("\n")) {split = msg.content.split('\n');}
    msg.channel.send("test: " + split[0]);
    if (split[0] != null) {var task = split[0];}
    if (split[1] != null) {var details = split[1];}
    if (split[2] != null) {var date = split[2];} else {msg.channel.send("Invalid Arguments: Format: \n ?sendtask <Task Name> \n <details> \n <date needed>");}
  }
});
