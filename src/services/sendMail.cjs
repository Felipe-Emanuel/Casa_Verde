require('dotenv').config()

const mailer = require('nodemailer');
module.exports = (email) => {
  const smtp = mailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false,
    auth: {
      user: 'apikey',
      pass: process.env.SENDGRID_API_KEY
    }
  })
  const mail = {
    from: 'FelipeSullivan50@gmail.com',
    to: email,
    subject: `Confirmação da News Letter da Casa Verde`,
    text: `Olá.
          Boas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e vai começar a receber e-mails com as novidades de nossa loja e dicas de como cuidar de suas plantas.
          Até logo!`
  }

  return new Promise ((resolve, reject) => {
    smtp.sendMail(mail)
    .then(resp => {
      smtp.close()
      return resolve(resp)
    })
    .catch(err => {
      smtp.close();
      return reject(err)
    })
  })
}
