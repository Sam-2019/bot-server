import { bot } from "./telegraf/index.js";

export async function services() {
  bot.launch();
}
