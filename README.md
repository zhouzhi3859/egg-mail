# egg-mail



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
exports.mail = {
  enable: true,
  package: 'egg-mail',
};
```

Configure email information in `${app_root}/config/config.default.js`:

**Single Client**

```javascript
config.mail = {
  username: *your email account*,
  password: *your email password*,
  host: *you email smtp server ip*,
  sender: *what accout are you use to send email,like:XXX@XXX.com*,
}
```

## Usage

In controller, you can use `app.email.sendEmail` to send email.

```js
// app/controller/home.js

module.exports = app => {
  return class HomeController extends app.Controller {
    async index() {
      const { ctx, app } = this;
      // sendEmail
      ctx.body = await app.mail.sendEmail('Title','Content','Reciver');
      // ctx.body = await app.mail.sendEmail('test','testContent','test@test.com');
    }
  };
};
```


## Questions & Suggestions

Please open an issue [here](https://github.com/zhouzhi3859/egg-mail/issues).

## License

[MIT](LICENSE)
