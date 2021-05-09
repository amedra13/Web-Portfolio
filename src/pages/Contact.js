import React, { useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import { CSSTransition } from 'react-transition-group';

const Contact = () => {
	window.scrollTo(0, 0);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [showForm, setShowForm] = useState(true);

	const sendMessage = () => {
		setShowForm(false);
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
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
						<button onClick={() => sendMessage()}>Send Message</button>
					</form>
				)}
			</div>
		</div>
	);
};

export default Contact;
