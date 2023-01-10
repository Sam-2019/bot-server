const { Telegraf } = require("telegraf");
const { TOKEN } = require("../config");
const { postTransformer } = require("../transformer");
const bot = new Telegraf(TOKEN);

bot.on("text", async (ctx) => {
  const url = ctx.message.text;

  console.log(url)

  if (!url) {
    ctx.reply("No message");
  }

  const info = await postTransformer(url);
  return ctx.reply(info);
});

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

module.exports = {
  bot,
};
