const { replies, triggers } = require("./data.json");

const fetch = require("node-fetch");

const commandHandler = async msg => {
    const ranx = len => Math.floor(Math.random() * len);

    if (msg.channel.id == process.env.CHANNELID) {
        let tokens = msg.content.split(" ");

        if (triggers.includes(tokens[0].toLowerCase())) {
            const idx = ranx(replies.length);
            msg.channel.send(replies[idx]);
        } else if (tokens[0] == "!gif") {
            let query = "";
            if (tokens.length > 1) {
                query = tokens.slice(1, tokens.length).join(" ");
            } else {
                query = "exited";
            }

            let url = `https://api.tenor.com/v1/search?q=${query}&key=${process.env.TENORKEY}&contentfilter=off`;

            const response = await fetch(url);
            const json = await response.json();
            const gifs = json.results;

            const idx = ranx(gifs.length);

            msg.channel.send(gifs[idx].url);
        }
    }
};

module.exports = commandHandler;
