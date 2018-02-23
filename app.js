const Email = require('./lib/email')

module.exports = app => {
  let email = new Email(app.config.email)

  app.email = {
    async sendEmail(title, info, receiver, attachment) {
      let result = await email.sendEmail(title, info, receiver, attachment)
      return result
    }
  }
}
