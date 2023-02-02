import { Telegraf } from "telegraf";
import { TOKEN } from "../config.js";
import { postTransformer } from "../transformer.js";
export const bot = new Telegraf(TOKEN);

bot.on("text", async (ctx) => {
  const text = ctx.message.text;
//   ctx.reply(await postTransformer(text));
  console.log(text)
//   try {
//     ctx.reply(await postTransformer(text));
//   } catch (error) {
//     ctx.reply("Unsupported website");
//   }
});


process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
