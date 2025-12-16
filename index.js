const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
if (!TOKEN) {
  throw new Error('TELEGRAM_BOT_TOKEN is missing');
}

const app = express();
const PORT = process.env.PORT || 3000;

// Telegram Bot (Long Polling)
const bot = new TelegramBot(TOKEN, { polling: true });

// Commands
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    '🔥 Welcome to Crypto Ascension Arena\n\nDaily duels. Weekly tournaments.\nCommunity decides.'
  );
});

bot.onText(/\/dailyduel/, (msg) => {
  bot.sendMessage(msg.chat.id, '⚔️ Daily Duel (Demo)');
});

bot.onText(/\/tournament/, (msg) => {
  bot.sendMessage(msg.chat.id, '🏆 Weekly Tournament (Demo)');
});

bot.onText(/\/leaderboard/, (msg) => {
  bot.sendMessage(msg.chat.id, '📊 Leaderboard (Demo)');
});

bot.onText(/\/profile/, (msg) => {
  bot.sendMessage(msg.chat.id, '👤 Your Profile (Demo)');
});

// Express فقط عشان Render
app.get('/', (req, res) => {
  res.send('Crypto Ascension Arena Bot is running.');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
