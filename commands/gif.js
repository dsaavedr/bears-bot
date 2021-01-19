const fetch = require("node-fetch");

const { ranx } = require("../utils");

const gif = async (msg, tokens) => {
    let query = "";
    if (tokens.length > 0) {
        query = tokens.join(" ");
    } else {
        query = "exited";
    }

    let url = `https://api.tenor.com/v1/search?q=${query}&key=${process.env.TENORKEY}&contentfilter=off`;

    const response = await fetch(url);
    const json = await response.json();
    const gifs = json.results;

    const idx = ranx(gifs.length);

    msg.channel.send(gifs[idx].url);
};

module.exports = gif;
