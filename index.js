const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
if (!TOKEN) {
  throw new Error('TELEGRAM_BOT_TOKEN is missing');
}

const app = express();
const PORT = process.env.PORT || 3000;

// 🔴 المهم: ربط الواجهة
app.use(express.static('public'));

// Telegram Bot
const bot = new TelegramBot(TOKEN, { polling: true });

// Commands
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    '🔥 Welcome to Crypto Ascension Arena\n\nTap OPEN to enter the arena.'
  );
});

bot.onText(/\/dailyduel/, (msg) => {
  bot.sendMessage(msg.chat.id, '⚔️ Open the app to view Daily Duel');
});

bot.onText(/\/tournament/, (msg) => {
  bot.sendMessage(msg.chat.id, '🏆 Open the app to view Tournament');
});

bot.onText(/\/leaderboard/, (msg) => {
  bot.sendMessage(msg.chat.id, '📊 Open the app to view Leaderboard');
});

bot.onText(/\/profile/, (msg) => {
  bot.sendMessage(msg.chat.id, '👤 Open the app to view your profile');
});

// Root check
app.get('/', (req, res) => {
  res.send('Crypto Ascension Arena Web App is running.');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
