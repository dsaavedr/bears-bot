require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();

const commandHandler = require("./commands/commands");

client.on("ready", e => {
    console.log("Bot is ready!\n");
});

client.on("message", commandHandler);

client.login(process.env.BOTTOKEN);
