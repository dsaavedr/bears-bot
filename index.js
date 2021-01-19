require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();

const replies = require("./replies.json");

client.on("ready", e => {
    console.log("Bot is ready! 🙌");
});

const triggers = ["hello", "hi"];

client.on("message", msg => {
    if (triggers.includes(msg.content.toLowerCase()) && msg.channel.id == "801128717694271498") {
        // msg.reply("fuck you! " + "🙌❤💕😊😎");
        const idx = Math.floor(Math.random() * replies.length);
        msg.channel.send(replies[idx]);
    }
});

client.login(process.env.BOTTOKEN);
