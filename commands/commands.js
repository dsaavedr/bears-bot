const { triggers } = require("../data.json");

const fetch = require("node-fetch");
const { ranx } = require("../utils");

const hello = require("./hello");
const gif = require("./gif");

const commands = {
    gif,
    hello
};

const commandHandler = async msg => {
    if (msg.channel.id == process.env.CHANNELID) {
        let tokens = msg.content.split(" ");

        let command = tokens.shift();
        let pref = command.charAt(0);

        if (pref === "!") {
            command = command.substring(1);

            if (triggers.includes(command.toLowerCase())) {
                hello(msg);
            } else {
                commands[command](msg, tokens);
            }
        }
    }
};

module.exports = commandHandler;
