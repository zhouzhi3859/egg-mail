const email = require('emailjs/email')

// 封装发送邮件Promise函数
let sendEmail = function (server, option, title, info, receiver, attachment) {
  return new Promise((res, rej) => {
    server.send({
      text: info,
      from: option.sender,
      to: receiver,
      subject: title,
      attachment
    }, function (err, msg) {
      if (err) {
        res({code: -1, msg: '发送邮件失败！'})
      } else {
        res({code: 0, msg: msg})
      }
    })
  })
}

class Email {
  constructor(option) {
    this.option = option
  }

  // 发送邮件
  async sendEmail(title, info, receiver, attachment) {
    let ts = this
    let option = ts.option
    // 配置邮件服务
    let server = email.server.connect({
      user: option.username,
      password: option.password,
      host: option.host,
      ssl: true
    })

    if (!receiver || receiver.length === 0) return {code: -1, msg: 'ERR,receiver isn`t allow Nulls!'}
    if (!title || title.length === 0) return {code: -1, msg: 'ERR,title isn`t allow Nulls!'}
    let result = await sendEmail(server, option, title, info, receiver, attachment)
    return result
  }
}

module.exports = Email