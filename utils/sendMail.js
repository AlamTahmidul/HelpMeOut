const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendWelcomeEmail = (emailAddress, username) => {
    const msg = {
		to: emailAddress, // Change to your recipient
		from: "helpmeoutsbuhacks2021@gmail.com", // Change to your verified sender
		subject: "Welcome to HelpMeOut",
		text: `${username}, thank you for registering on HelpMeOut! Feel free to look around or start 
        requesting help!`,
	};

	sgMail
		.send(msg)
		.then(() => {
			console.log("Email sent");
		})
		.catch((error) => {
			console.error(error.response.body.errors);
		});
}

exports.sendRequestClaimedEmail = (emailAddress, username) => {

	const msg = {
		to: emailAddress, // Change to your recipient
		from: "helpmeoutsbuhacks2021@gmail.com", // Change to your verified sender
		subject: "Your request has been claimed",
		text: `${username} has taken up your request.`,
	};

	sgMail
		.send(msg)
		.then(() => {
			console.log("Email sent");
		})
		.catch((error) => {
			console.error(error.response.body.errors);
		});
};
