
const Email = require('./lib/email');

module.exports = app => {
  let email = new Email(app.config.mail);
  
  app.mail = {
   async sendEmail(title,info,reciver) {
     let result = await email.sendEmail(title,info,reciver);
     return result;
   }
   
  };
};
