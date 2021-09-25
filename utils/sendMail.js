const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendEmail = (emailAddress, username) => {
    console.log(emailAddress);
    console.log(process.env.SENDGRID_API_KEY);

	const msg = {
		to: emailAddress, // Change to your recipient
		from: "darreniyer06@gmail.com", // Change to your verified sender
		subject: "Your request has been claimed",
		text: `${username} has taken up your request.`,
	};

    console.log(msg);

	sgMail
		.send(msg)
		.then(() => {
			console.log("Email sent");
		})
		.catch((error) => {
			console.error(error.response.body.errors);
		});
};
