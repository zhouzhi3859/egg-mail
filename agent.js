
const Email = require('./lib/email');

module.exports = agent => {
  let email = new Email(agent.config.email);
  
  agent.email = {
    async sendEmail(title,info,reciver) {
      let result = await email.sendEmail(title,info,reciver);
      return result;
    }
    
  };
};
