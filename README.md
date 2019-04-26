# egg-mail

![](https://img.shields.io/badge/version-1.0.10-green.svg?)
[![](https://img.shields.io/badge/nodejs->=8.0-green.svg?)](https://nodejs.org/en/)
[![](https://img.shields.io/badge/npm->=5.4-blue.svg)](https://www.npmjs.com/)
![](https://img.shields.io/badge/license-MIT-000000.svg)
[![Build Status](https://www.travis-ci.org/zhouzhi3859/egg-mail.svg?branch=master)](https://www.travis-ci.org/zhouzhi3859/egg-mail)

Email smtp client based on emailjs for egg framework

## Install

```bash
$ npm i egg-mail --save
```

Email Plugin for egg, support egg application send email.

This plugin based on [emailjs](https://github.com/eleith/emailjs)

## Configuration

Change `${app_root}/config/plugin.js` to enable email plugin:

```js
exports.email = {
  enable: true,
  package: 'egg-mail',
};
```

Configure email information in `${app_root}/config/config.default.js`:

**Single Client**

```js
config.email = {
  user: *your email account*,
  password: *your email password*,
  host: *you email smtp server ip or domain name*,
  sender: *what accout are you use to send email,like:XXX@XXX.com*,
}
```

## Usage

In controller, you can use `app.email.sendEmail` to send email.

```js
// app/controller/home.js
const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    // sendEmail
    ctx.body = await app.email.sendEmail('Title','Content','Reciver');
    // ctx.body = await app.email.sendEmail('test','testContent','test@test.com');
    // or
    // sendEmail with attachment
    ctx.body = await app.email.sendEmail('Title','Content','Reciver','Attachment');
    // ctx.body = await app.email.sendEmail('test','testContent','test@test.com', [ ... ]);
  }
};
module.exports = HomeController;
```

## Example Attachment Array

```
[
  {data:"<html>i <i>hope</i> this works!</html>", alternative:true},
  {path:"path/to/file.zip", type:"application/zip", name:"renamed.zip"}
]
```
more detail please click [here](https://github.com/eleith/emailjs#example-usage---html-emails-and-attachments)

## Questions & Suggestions

Please open an issue [here](https://github.com/zhouzhi3859/egg-mail/issues).

## Typescript
you can visit this [example](https://github.com/zhouzhi3859/iMagazineServerTS).

## License

[MIT](LICENSE)
