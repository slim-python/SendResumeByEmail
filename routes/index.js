import express from "express";
import mailerRoute from "./mailRouter.js";

const router = express.Router();

router.use("/api", mailerRoute);

export default router;
