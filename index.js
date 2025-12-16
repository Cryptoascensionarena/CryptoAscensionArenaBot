const { Bot } = require('mastra');

const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN);

// Home / Lobby
bot.command('start', (ctx) => {
  ctx.reply('Welcome to Crypto Ascension Arena!', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Daily Arena', callback_data: 'daily' }],
        [{ text: 'Weekly Championship', callback_data: 'weekly' }],
        [{ text: 'My Profile', callback_data: 'profile' }],
        [{ text: 'Info / Rules', callback_data: 'info' }]
      ]
    }
  });
});

// Daily Arena
bot.command('daily', (ctx) => {
  ctx.reply('Project A vs Project B\nVote using /voteA or /voteB');
});

bot.command('voteA', (ctx) => ctx.reply('You voted for Project A'));
bot.command('voteB', (ctx) => ctx.reply('You voted for Project B'));

// Weekly Championship
bot.command('weekly', (ctx) => {
  ctx.reply('Weekly Top 3 Projects:\n1. Project X\n2. Project Y\n3. Project Z');
});

// Profile
bot.command('profile', (ctx) => {
  ctx.reply('XP: 100\nLevel: 2\nBadges: Demo');
});

// Info / Rules
bot.command('info', (ctx) => {
  ctx.reply('This is a demo Skeleton Bot for Crypto Ascension Arena.\nCore logic not implemented yet.');
});

bot.launch();
