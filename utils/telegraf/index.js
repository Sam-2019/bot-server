import { Telegraf } from "telegraf";
import axios from "axios";
import { TOKEN } from "../config.js";
import { postTransformer } from "../transformer.js";
export const bot = new Telegraf(TOKEN);

bot.on("text", async (ctx) => {
  const url = ctx.message.text;
    ctx.reply(await postTransformer(url));
//   try {
//     const data = await axios.get(url);
//     if (data.status === 200) {
//       ctx.reply(await postTransformer(url));
//     }
//   } catch (error) {
//     ctx.reply("Unsupported website");
//   }
});


process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
