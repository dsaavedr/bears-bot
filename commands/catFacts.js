const fetch = require("node-fetch");

const { ranx } = require("../utils");

const facts = async msg => {
    const url = "https://cat-fact.herokuapp.com/facts";

    const response = await fetch(url);
    const json = await response.json();
    const idx = ranx(json.length);
    const quote = json[idx].text;

    msg.channel.send("😸😼😻 " + quote);
};

module.exports = facts;
