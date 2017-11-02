
const Email = require('./lib/email');

module.exports = app => {
  let mail = new Email(app.config.mail);
  
  app.mail = {
   async sendEmail(title,info,reciver) {
     let result = await mail.sendEmail(title,info,reciver);
     return result;
   }
   
  };
};
