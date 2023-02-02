import { Telegraf } from "telegraf";
import { TOKEN } from "../config.js";
import { postTransformer } from "../transformer.js";
export const bot = new Telegraf(TOKEN);

bot.on("text", async (ctx) => {
 const text = ctx.message.text;
 try {
  const info = await postTransformer(text);
  ctx.reply(info);
 } catch (error) {
  ctx.reply("failed");
 }
});

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
