const fs = require("fs");
const path = require("path");

const { triggers } = require("./data.json");

let commands = {};

const hello = require("./commands/hello");

const dirPath = path.join(__dirname, "commands");

fs.readdir(dirPath, (err, files) => {
    if (err) {
        return console.error("Unable to scan directory: " + err);
    }
    files.forEach(file => {
        const name = file.split(".")[0];
        const func = require("./commands/" + name);
        commands[name] = func;
    });
});

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
