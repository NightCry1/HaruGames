const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.token);

client.on('ready', () => {
  console.log("The bot is now online!")
})

const prefix = "!";
client.on('message', (message) => {
  if (message.content == prefix + "hi") {
    message.channel.send("Hello!")
  } else if (message.content == prefix + "ping") {
    message.channel.send("PONG!!")
  } else if (message.content == prefix + "var") {
    let embed = new Discord.MessageEmbed()
    .addField("Field name", "Field value", true)
    .addField("Field name 2", "Field value 2", true)
    .setAuthor("Tutorial bot")
    .setColor("RANDOM")
    .setDescription("A description here!")
    .setFooter("SUBSCRIBE TO HARU!")
    .setTimestamp()
    .setTitle("A HUGE TITLE!")
    message.channel.send(embed)
  }
})


////////////////////////////////////////////////////////////////
const express = require('express');
const app = express()

app.get('/', (req, res) => {
  res.send(require('/app/html.js'))
})

app.listen(process.env.PORT)
////////////////////////////////////////////////////////////////