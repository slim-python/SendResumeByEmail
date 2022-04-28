import express from "express";
import dotenv from "dotenv";
import indexRoute from "./routes/index.js";
dotenv.config();

const app = express();

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
