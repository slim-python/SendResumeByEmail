import Telegraf from "telegraf";
import { config } from "dotenv";
import dotenv from "dotenv";
dotenv.config();
import axios from "axios";
import validator from "validator";
const { isEmail } = validator;

const SendResumeBot = () => {
  const bot = new Telegraf(process.env.BOT_TOKEN);

  bot.start((ctx) =>
    ctx.reply(
      `Hello ${ctx.from.first_name} \n/send <email> \t - to send resume`
    )
  );

  bot.command("send", (ctx) => {
    let mail = ctx.message.text;
    mail = mail.split(" ");
    mail = mail[1];

    //check if email is valid
    const valid_email = validator.isEmail(mail);

    //if email is valid then start the process
    //btw stop reading and get me a job :(
    if (valid_email) {
      try {
        axios.get(`${process.env.API}${mail}`).then((resp) => {
          console.log(resp.data.status);
          if (resp.data.status === 400) {
            ctx.reply(`email has been sent to : \n${mail} Sucessfully ✨`);
            ctx.reply(
              `Don't worry, you'll get a Job soon.\ngood things take time ❤️`
            );
          }
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      ctx.reply("Please enter a valid email");
    }
  });

  bot.launch();
};

export default SendResumeBot;
