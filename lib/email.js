'use strict';
const email = require('emailjs/email');
const sendEmail = require('./sendEmail');

class Email {
  constructor(option) {
    this.option = option;
  }

  // 发送邮件
  async sendEmail(title, info, receiver, attachment = []) {
    const ts = this;
    const option = ts.option;
    // 配置邮件服务
    const server = email.server.connect({
      ...option
    });

    if (!receiver || receiver.length === 0) return { code: -1, msg: 'ERR,receiver isn`t allow Nulls!' };
    if (!title || title.length === 0) return { code: -1, msg: 'ERR,title isn`t allow Nulls!' };
    let result = {};
    if (attachment === []) {
      result = await sendEmail(server, option, title, info, receiver);
    } else {
      result = await sendEmail(server, option, title, info, receiver, attachment);
    }
    return result;
  }
}

module.exports = Email;
