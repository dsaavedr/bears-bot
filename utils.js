const ranx = len => Math.floor(Math.random() * len);

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

module.exports = { ranx, capitalize };
