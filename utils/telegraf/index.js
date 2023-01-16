import { Telegraf } from "telegraf";
import { TOKEN } from "../config.js";
import { postTransformer } from "../transformer.js";
export const bot = new Telegraf(TOKEN);

bot.on("text", async (ctx) => {
  const url = ctx.message.text;

  try {
    await fetch(new URL(url));
    const info = await postTransformer(url);
    ctx.reply(info);
  } catch (err) {
    ctx.reply("Unsupported website");
  }
});

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
