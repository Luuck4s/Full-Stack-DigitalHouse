const nodemailer = require("nodemailer");

/**
 * Para conseguir enviar o email precisa habilitar a opção de segurança na conta google
 */

const transport = {
  services: 'gmail', 
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASS_EMAIL,
  },
};

module.exports = {
  enviar: (req, res) => {
    const { dest, subj, msg } = req.body;
    
    const transporter = nodemailer.createTransport(transport);

    const email = {
      from: process.env.USER_EMAIL,
      to: dest,
      subject: subj,
      text: msg
    };

    transporter.sendMail(email, (error, info) => {
      if (error) {
        console.log(error);
        res.status(401).send("Error interno");
      }

      console.log(info);
      res.redirect('/');
    });
  },
};
