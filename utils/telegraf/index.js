import { Telegraf } from "telegraf";
import { TOKEN } from "../config.js";
import { postTransformer } from "../transformer.js";
export const bot = new Telegraf(TOKEN);

bot.on("text", async (ctx) => {
  const url = ctx.message.text;

  if (!url) {
    ctx.reply("No message");
  }

  const info = await postTransformer(url);
  return ctx.reply(info);
});

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));