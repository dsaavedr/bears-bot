// TODO: check for files in commands dir and add them to commands object with node fs

const { triggers } = require("./data.json");

const hello = require("./commands/hello");
const gif = require("./commands/gif");
const dump = require("./commands/dump");
const catFacts = require("./commands/catFacts");
const dict = require("./commands/dict");

const commands = {
    gif,
    hello,
    dump,
    catFacts,
    dict
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
