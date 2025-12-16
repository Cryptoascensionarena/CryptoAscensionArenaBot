const express = require('express');
const { Bot } = require('mastra');

const app = express();
const PORT = process.env.PORT || 3000;

const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN);

// Dummy Commands
bot.command('start', ctx => ctx.reply('Welcome to Crypto Ascension Arena!'));
bot.command('dailyduel', ctx => ctx.reply('Daily Duel Dummy'));
bot.command('tournament', ctx => ctx.reply('Weekly Tournament Dummy'));
bot.command('leaderboard', ctx => ctx.reply('Leaderboard Dummy'));
bot.command('profile', ctx => ctx.reply('Profile Dummy'));

bot.launch();

// Express server فقط لتجنب Port Error
app.get('/', (req, res) => res.send('Crypto Ascension Arena Bot is running!'));
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
