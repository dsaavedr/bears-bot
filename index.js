require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();

client.login(process.env.BOTTOKEN);

client.on("ready", e => {
    console.log("Bot is ready! 🙌");
});
