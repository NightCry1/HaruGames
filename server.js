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
  res.send(`Add a "/boxGame" or a "/lolGen" to the end of this link to play haru's dumb stuff!`)
})

app.get('/boxGame', (req, res) => {
  res.send(require('/app/htmls/boxGame.js'))
})

app.get('/lolGen', (req, res) => {
  res.send(require('/app/htmls/lolGen.js'))
})

app.listen(process.env.PORT)
////////////////////////////////////////////////////////////////
