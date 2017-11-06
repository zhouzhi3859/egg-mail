
const Email = require('./lib/email');

module.exports = app => {
  let email = new Email(app.config.email);
  
  app.email = {
   async sendEmail(title,info,reciver) {
     let result = await email.sendEmail(title,info,reciver);
     return result;
   }
   
  };
};
