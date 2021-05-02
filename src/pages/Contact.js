import React, { useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	let formContent = (
		<form className="contact__form">
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
			<button onClick={() => setIsLoading(true)}>Send Message</button>
		</form>
	);

	if (isLoading) {
		formContent = <LoadingSpinner />;
	}
	return (
		<div className="contact">
			<div className="contact__header">
				<h1>Lets make something special together</h1>
			</div>
			<div className="contact__formContainer">
				<div className="formHeader">
					<h1>Feel free to say "hi"</h1>
					<p>
						I’m interested in freelance opportunities – especially ambitious or
						large projects. However, if you have other request or question,
						don’t hesitate to use the form.
					</p>
				</div>
				{formContent}
			</div>
		</div>
	);
};

export default Contact;
