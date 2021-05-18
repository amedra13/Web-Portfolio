import React, { useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import { CSSTransition } from 'react-transition-group';
import emailjs from 'emailjs-com';
import { emailId, emailServiceId, emailTemplate } from '../Email';
emailjs.init(emailId);

const Contact = () => {
	window.scrollTo(0, 0);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [showForm, setShowForm] = useState(true);
	const [err, setErr] = useState(false);

	const sendMessage = async (e) => {
		e.preventDefault();
		if (name === '' || email === '' || subject === '' || message === '') {
			setErr(true);
			return;
		}
		setShowForm(false);
		setIsLoading(true);
		const emailData = {
			from_name: name,
			from_email: email,
			subject: subject,
			message: message,
		};
		await emailjs.send(emailServiceId, emailTemplate, emailData);
		setName('');
		setEmail('');
		setSubject('');
		setMessage('');
		setErr(false);
		setIsLoading(false);
	};

	return (
		<div className="contact">
			<div className="contact__header">
				<h1>Lets work together</h1>
			</div>
			<div className="contact__formContainer">
				<div className="formHeader">
					<h1>Feel free to say "hi"</h1>
					<p>
						I’m interested in opportunities in which I can learn, grow, and
						sharpen skills as a Web Developer. If you would like to get in touch
						and see if we can work on something great together or if you have
						other request or question, don’t hesitate to use the form.
					</p>
					{err && (
						<p style={{ color: 'red' }}>
							- Empty Field. Please fill out form completely -
						</p>
					)}
				</div>
				<CSSTransition
					in={isLoading}
					timeout={300}
					classNames="loading"
					unmountOnExit
					onExited={() => setShowForm(true)}
				>
					<LoadingSpinner />
				</CSSTransition>
				{showForm && (
					<form onSubmit={sendMessage} className="contact__form">
						<input
							id="name"
							type="text"
							placeholder="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							id="email"
							type="text"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							id="subject"
							type="text"
							placeholder="Subject"
							value={subject}
							onChange={(e) => setSubject(e.target.value)}
						/>
						<textarea
							id="message"
							type="text"
							placeholder="I would love to hear form you!"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
						<button type="submit">Send Message</button>
					</form>
				)}
			</div>
		</div>
	);
};

export default Contact;
