'use strict';
// 封装发送邮件Promise函数
const sendEmail = function(server, option, title, info, receiver, attachment = []) {
  return new Promise(res => {
    const params = {
      text: info,
      from: option.sender,
      to: receiver,
      subject: title,
    };
    if (attachment !== []) {
      params.attachment = attachment;
    }
    server.send(params, function(err, msg) {
      if (err) {
        res({ code: -1, msg: '发送邮件失败！', err });
      } else {
        res({ code: 0, msg });
      }
    });
  });
};

module.exports = sendEmail;
