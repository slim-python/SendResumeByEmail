import express from "express";
import { ShowResumeController } from "../controllers/ShowResumeController.js";

const router = express.Router();
router.get("/Full_stack_dev_abhishek.pdf", ShowResumeController);

export default router;
