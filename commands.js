const { triggers } = require("./data.json");

const hello = require("./commands/hello");
const gif = require("./commands/gif");

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
