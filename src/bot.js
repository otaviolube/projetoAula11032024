require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN;

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1]; 

  bot.sendMessage(chatId, resp);
});

bot.on('photo', async function(msg){
    const chatId = msg.chat.id;
    const photoId = msg.photo[msg.photo.length - 1].file_id;

    const photo = await bot.downloadFile(photoId, "./src/imgs");


    bot.sendPhoto(chatId, photo, { caption: "Toma aí GOKU"})
})

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Fala doido');
});