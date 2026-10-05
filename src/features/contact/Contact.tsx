import { Container } from 'react-bootstrap';
import '../../css/contact.css';
// import { CaretRightFill } from 'react-bootstrap-icons';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { forwardRef } from 'react';
import content from '../../content/portfolio.json';

const Contact = forwardRef<HTMLDivElement>((_, ref) => {
	const form = useRef<HTMLFormElement>(null);
	const [sendStatus, setSendStatus] = useState<
		'unsent' | 'sending' | 'sent' | 'error'
	>('unsent');

	const sendEmail = (e: React.FormEvent) => {
		e.preventDefault();
		if (sendStatus != 'unsent') return;
		setSendStatus('sending');

		emailjs
			.sendForm('service_un820te', 'template_d98kflq', form.current, {
				publicKey: 'kIOiQ0cgBLutmBJ78',
			})
			.then(
				() => {
					setSendStatus('sent');
					console.log('Email envoyé avec succès');
				},
				error => {
					setSendStatus('error');
					console.log("Echec de l'envoi de l'mail : ", error.text);
				}
			);
	};

	return (
		<section id="contact" className="contact banner" ref={ref}>
			<div className="form-area">
				<Container>
					<div className="row single-form g-0">
						<div className="col-lg-12 col-xl-6">
							<div className="left">
								<h2>
									<span>{content.contact.titleLead}</span>
									<br />
									{content.contact.title}
								</h2>
								<div className="coord">
									<h3>{content.contact.alternativeTitle}</h3>
									<div className="coord-item">
										<span>{content.contact.emailLabel}</span>
										<a href={`mailto:${content.contact.email}`}>
											{content.contact.email}
										</a>
									</div>
									<div className="coord-item">
										<span>{content.contact.linkedinLabel}</span>
										<a
											href={content.contact.linkedinUrl}
											target="_blank"
											rel="noreferrer"
										>
											{content.contact.linkedin}
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-12 col-xl-6">
							<div className="right">
								{/* <CaretRightFill /> */}
								<form ref={form} onSubmit={sendEmail}>
									<div className="mb-3">
										<label htmlFor="user_name" className="form-label">
											{content.contact.form.nameLabel}
										</label>
										<input
											type="text"
											name="user_name"
											className="form-control"
										/>
									</div>
									<div className="mb-3">
										<label htmlFor="user_email" className="form-label">
											{content.contact.form.emailLabel}
										</label>
										<input
											type="email"
											name="user_email"
											className="form-control"
										/>
									</div>
									<div className="mb-3">
										<label htmlFor="message" className="form-label">
											{content.contact.form.messageLabel}
										</label>
										<textarea name="message" className="form-control" />
									</div>
									<button
										type="submit"
										className={`btn submit ${sendStatus} btn-primary`}
										aria-live="polite"
										aria-label={content.contact.form[sendStatus]}
									>
										{sendStatus === 'sending' && (
											<>
												<div className="loading-spinner"></div>
												<span className="visually-hidden">
													{content.contact.form.sending}
												</span>
											</>
										)}
										{sendStatus !== 'sending' &&
											content.contact.form[sendStatus]}
									</button>
								</form>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</section>
	);
});

export default Contact;
