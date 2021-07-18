const express = require('express');
const path = require('path');
const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const dewList = require('./dewCommands/index');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    const returnMessage = dewList[Math.floor(Math.random() * dewList.length)];
    if (message.content.toLowerCase().includes('do the dew')) {
        message.channel.send(returnMessage);
    }
    if (message.content.toLowerCase().includes('pop out')) {
        message.channel.send('On the east coast we call it "Soda out".');
    }
    if (message.content.toLowerCase().includes('pop out')) {
        message.channel.send('On the east coast we call it "Soda out".');
    }
});

client.login(process.env.DISCORD_TOKEN);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});