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
    msg.channel.send("What is the task name?");
    quiz = true;
    //await answer != null;
    await question1();
    msg.channel.send("Answer: " + answer);
  }
  if (quiz == true) {
    if (!msg.content.startsWith('?sendtask')) {
      answer = msg.content;
    }
  }
});
async function question1() {
  while (answer = null) {
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

