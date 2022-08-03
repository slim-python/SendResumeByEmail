import express from "express";
import dotenv from "dotenv";
import indexRoute from "./routes/index.js";
import SendResumeBot from "./utils/SendResumebot.js";
import rateLimit from "express-rate-limit";

dotenv.config();

//rate limit stuff

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 70, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const app = express();

//apply rate limit
app.use(limiter);

app.use(express.json());

app.use("/", indexRoute);

app.get("/", (req, res) => {
  res.send("Server is running");
});

const port = process.env.PORT || 8000;

app.listen(process.env.PORT, () => {
  try {
    console.log(`Server Running on http://localhost:${port}`);
  } catch (error) {
    console.log(`Error in connecting to server: ${error}`);
  }
});

//start the telegram bot
SendResumeBot();
