const Discord = require("discord.js");
const fs = require('fs'); 
client = new Discord.Client();

client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`);
client.user.setPresence({
  status: 'idle',
  game: { 
     type: 0,
     name: 'Im better by myself..',
     details: `Smile`,
     state: 'Im used to the pain', 
    application_id: '626146017472937994',
        smallImageKey: '',
        smallImageText: '',
        LargeImageKey: '',
        LargeImageText: '', 
        instance:false, 
   }
    });
});




client.login(process.env.BOT_TOKEN)
