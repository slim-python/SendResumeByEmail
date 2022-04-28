import SendResumeByEmail from "../SendEmail.js";

export const mailhandlerController = (req, res) => {
  console.log(req.params);
  const { mail } = req.params;
  SendResumeByEmail(mail)
    .then((response) => {
      console.log("Sucess >> ", JSON.parse(response));

      res.json({ status: 400, message: JSON.parse(response) });
    })
    .catch((err) => {
      console.log("error >> ", JSON.parse(err));

      res.json({ status: 200, message: JSON.parse(err) });
    });
  console.log("working fine");
};
