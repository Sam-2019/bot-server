import { bot } from "./telegraf/index.js";

export function services() {
  bot.launch();
}
