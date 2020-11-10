const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.token);

client.on('ready', () => {
  console.log("The bot is now online!")
})

const prefix = "!";
client.on('message', (message) => {
  
})


////////////////////////////////////////////////////////////////
const express = require('express');
const app = express()

app.get('/', (req, res) => {
  res.send(require('/app/htmls/boxGame.js'))
})

app.listen(process.env.PORT)
////////////////////////////////////////////////////////////////