const fetch = require("node-fetch");

const { capitalize } = require("../utils");

const facts = async (msg, tokens) => {
    const endpoint = "entries";
    const language_code = "en-us";
    const word = tokens[0].toLowerCase();
    const url = `https://od-api.oxforddictionaries.com/api/v2/${endpoint}/${language_code}/${word}`;

    const response = await fetch(url, {
        headers: {
            app_id: "fed78092",
            app_key: process.env.OXFORDKEY
        }
    });
    const json = await response.json();

    let definition = json.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
    definition = capitalize(definition);

    let etymology = null;

    try {
        etymology = json.results[0].lexicalEntries[0].entries[0].etymologies[0];
        etymology = capitalize(etymology);
    } catch (err) {
        console.error(err);
    }

    msg.channel.send("😎👩‍🎓\n" + definition + (etymology ? ".\n\n" + etymology + "." : "."));
};

module.exports = facts;
