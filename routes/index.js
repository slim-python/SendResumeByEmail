import express from "express";
import mailerRoute from "./mailRouter.js";
import AbhishekResumeRoute from "./AbhishekResumeRoute.js";

const router = express.Router();

router.use("/api", mailerRoute);
router.use("/resume", AbhishekResumeRoute);

export default router;
