const nodemailer = require('nodemailer');
const debug = require('debug')('my-namespace');
const transporter = require('./transporters');

const gmailTransporter = transporter.gmailTransporter;

module.exports = function(receiverEmail, token, next) {
	var mailOptions = {
		from: 'Primor <primorinc@gmail.com>',
		to: receiverEmail,
		subject: 'Your password has been changed',
		text: 'Hello,\n\n' +
          'This is a confirmation that the password for your account ' + receiverEmail + ' has just been changed.\n'
	};

	gmailTransporter.sendMail(mailOptions, (err, info) => {
		if (err) {
			debug(err);
			debug('Error sending email');
			return next(err);
		}
		debug('Message sent: %s', info.messageId);
		// Preview only available when sending through an Ethereal account
		debug('Preview URL: %s', nodemailer.getTestMessageUrl(info));
		next(null);
	});
};
