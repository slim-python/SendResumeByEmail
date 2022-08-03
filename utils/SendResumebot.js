import 'dotenv/config'
import Telegraf from "telegraf";
import axios from "axios";
import validator from "validator";

const SendResumeBot = () => {
  const bot = new Telegraf(process.env.BOT_TOKEN);

  bot.start((ctx) =>
    ctx.reply(
      `Hello ${ctx.from.first_name} \n/send <email> \t - to send resume`
    )
  );

  bot.command("send",async (ctx) => {
    let mail = null;
    mail = ctx.message.text;
    mail = mail.split(" ");
    mail = mail[1];

    //check if email is valid
    const valid_email = validator.isEmail(mail);
    // if email is valid then start the process
    if (valid_email) {
      try {
        const resp = await axios.get(`http://localhost:${process.env.PORT}/api/sendMail/mail=${mail}`)
        if (resp.data.status === 400) {
          ctx.reply(`email has been sent to : \n${mail} Sucessfully ✨`);
          ctx.reply(
            `Don't worry, you'll get a Job soon.\ngood things take time ❤️`
          );
        }
      } catch (error) {
        console.log(error);
        ctx.reply(`Couldn't send Email ✉️`);
        ctx.reply(`Probably API is not wroking 😥`);
      }
    } else {
      ctx.reply("Please enter a valid email");
    }
  });

  bot.launch();
};

export default SendResumeBot;
