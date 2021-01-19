const fetch = require("node-fetch");

const dump = async msg => {
    const url = "http://tronalddump.io/random/quote";

    const response = await fetch(url);
    const json = await response.json();
    const quote = json.value;

    msg.channel.send("Donald Trump said: " + quote);
};

module.exports = dump;
