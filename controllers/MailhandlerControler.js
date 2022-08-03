// @type-check
import SendResumeByEmail from "../SendEmail.js";

export const mailhandlerController = async (req, res) => {
  console.log(req.params);
  const { mail } = req.params;
  try {
    const response = await SendResumeByEmail(mail)
    console.log("Sucess >> ", JSON.parse(response));
    res.json({ status: 400, message: JSON.parse(response) });
  } catch (error) {
    console.log("error >> ", JSON.parse(err));
    res.json({ status: 200, message: JSON.parse(err) });
  }
};
