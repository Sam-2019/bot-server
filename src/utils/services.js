const { bot } = require("./telegraf");

function services() {
  bot.launch();
}

module.exports = {
  services,
};
