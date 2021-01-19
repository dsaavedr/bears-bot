require("dotenv").config();

const fetch = require("node-fetch");

const Discord = require("discord.js");
const client = new Discord.Client();

const replies = require("./replies.json");

client.on("ready", e => {
    console.log("Bot is ready!\n");
});

const triggers = ["hello", "hi"];

client.on("message", async msg => {
    if (msg.channel.id == process.env.CHANNELID) {
        if (triggers.includes(msg.content.toLowerCase())) {
            const idx = ranx(replies.length);
            msg.channel.send(replies[idx]);
        } else if (msg.content == "!gif") {
            let url = `https://api.tenor.com/v1/search?q=excited&key=${process.env.TENORKEY}&limit=8`;

            msg.channel.send("gif!");

            const response = await fetch(url);
            const json = await response.json();
            const gifs = json.results;

            const idx = ranx(gifs.length);

            msg.channel.send(gifs[idx].url);
        }
    }
});

const ranx = len => Math.floor(Math.random() * len);

client.login(process.env.BOTTOKEN);
