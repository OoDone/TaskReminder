const Discord = require('discord.js');
const client = new Discord.Client();
/*task name:
description/details:
when needed(due date):
*/
client.on('message', async function(msg) {
  var quiz;
  var answer;
  if (msg.content.startsWith('?sendtask')) {
    msg.channel.send("test");
    if(msg.content.includes("\n")) {var split = msg.content.split('\n'); return;}
    msg.channel.send("test: " + split[0]);
    if (split[0] != null) {return;} else {msg.channel.send("Invalid Arguments: Format: \n ?sendtask <Task Name> \n <details> \n <date needed>");}
    if (split[1] != null) {return;} else {msg.channel.send("Invalid Arguments: Format: \n ?sendtask <Task Name> \n <details> \n <date needed>");}
    if (split[2] != null) {return;} else {msg.channel.send("Invalid Arguments: Format: \n ?sendtask <Task Name> \n <details> \n <date needed>");}
    var task = split[0] + ":" + split[1] + ":" + split[2];
    msg.channel.send("Msg: " + task);
  }
  if (msg.content.startsWith('?sendtask2')) {
    var task;
    let filter = m => m.author.id === msg.author.id; //; wasnt there originally
    msg.channel.send(`What is the task name?`).then(() => {
      msg.channel.awaitMessages(filter, {
          max: 1,
          time: 30000,
          errors: ['time']
        })
        .then(msg => {
          msg = msg.first()
        msg.channel.send("Response1: " + msg.content);
        task = msg.content;
        })
        .catch(collected => {
            msg.channel.send('Timeout');
        });
    })
     //let filter2 = m => m.author.id === msg.author.id; //; wasnt there originally. Line possibly needed
    msg.channel.send(`What are the details for this task?`).then(() => {
      msg.channel.awaitMessages(filter, {
          max: 1,
          time: 30000,
          errors: ['time']
        })
        .then(msg => {
          msg = msg.first()
        msg.channel.send("Response2: " + msg.content);
        task += ":" + msg.content;
        })
        .catch(collected => {
            msg.channel.send('Timeout');
        });
    })
    //let filter3 = m => m.author.id === msg.author.id; //; wasnt there originally. Line possibly needed
    msg.channel.send(`When does this task need to be done?`).then(() => {
      msg.channel.awaitMessages(filter, {
          max: 1,
          time: 30000,
          errors: ['time']
        })
        .then(msg => {
          msg = msg.first()
        msg.channel.send("Response3: " + msg.content);
        task += ":" + msg.content;
        })
        .catch(collected => {
            msg.channel.send('Timeout');
        });
    })
  }
});

