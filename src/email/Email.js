const sendGridMail = require("@sendgrid/mail");
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

class Email {

    constructor() {
        this._to = null;
        this._from = process.env.EMAIL_FROM;
        this._subject = null;
        this._html = null;
        this._text = "";
    }

    withTo(to) {
        this._to = to;
        return this;
    }

    withSubject(subject) {
        this._subject = subject;
        return this;
    }

    withHtml(html) {
        this._html = html;
        return this;
    }

    send() {
        const msg = {
            to: this._to,
            from: this._from,
            subject: this._subject,
            html: this._html
        };
        return sendGridMail.send(msg);
    }
}

module.exports = Email;