import express from "express";
import { mailhandlerController } from "../controllers/MailhandlerControler.js";

const router = express.Router();

router.get("/sendMail/:mail", mailhandlerController);

export default router;
