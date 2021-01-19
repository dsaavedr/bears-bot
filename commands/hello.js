const { ranx } = require("../utils");

const { replies } = require("../data.json");

const hello = msg => {
    const idx = ranx(replies.length);
    msg.channel.send(replies[idx]);
};

module.exports = hello;
