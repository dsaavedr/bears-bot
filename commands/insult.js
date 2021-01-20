const fetch = require("node-fetch");

// const { ranx } = require("../utils");

const insult = async (msg, tokens) => {
    const url = "https://evilinsult.com/generate_insult.php?type=json";

    const response = await fetch(url);
    const json = await response.json();
    const insult = json.insult;

    if (tokens[0]) {
        msg.channel.send(`😈 Hey, ${tokens.join(" ")}: ${insult}`);
    } else {
        msg.channel.send(`😈 ${insult}`);
    }
};

module.exports = insult;
