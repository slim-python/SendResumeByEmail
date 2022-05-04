import { fileURLToPath } from "url";
import { dirname } from "path";

export const ShowResumeController = (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  //couldn't figure out how to change directory so kept the resume in controllers folder, might change it later
  res.sendFile(__dirname + "/Full_stack_dev_abhishek.pdf");
};
