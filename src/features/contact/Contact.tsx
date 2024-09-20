import { Container } from 'react-bootstrap';
import '../../css/contact.css';
// import { CaretRightFill } from 'react-bootstrap-icons';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { forwardRef } from 'react';

const Contact = forwardRef<HTMLDivElement>((_, ref) => {
	const form = useRef();
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
									<span>Mon profil vous intéresse ?</span>
									<br />
									N'hésitez pas à me laisser un message
								</h2>
								<div className="coord">
									<h3>Ou à me contacter</h3>
									<div className="coord-item">
										<span>Par email:</span>
										<a href="mailto:theo.engelaere.etu@univ-lille.fr">
											theo.engelaere.etu@univ-lille.fr
										</a>
									</div>
									<div className="coord-item">
										<span>Via LinkedIn:</span>
										<a
											href="#"
											onClick={e => {
												e.preventDefault();
												window.open(
													'https://www.linkedin.com/in/theo-engelaere',
													'_blank'
												);
											}}
										>
											theo-engelaere
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
											Votre nom
										</label>
										<input
											type="text"
											name="user_name"
											className="form-control"
										/>
									</div>
									<div className="mb-3">
										<label htmlFor="user_email" className="form-label">
											Adresse e-mail
										</label>
										<input
											type="email"
											name="user_email"
											className="form-control"
										/>
									</div>
									<div className="mb-3">
										<label htmlFor="message" className="form-label">
											Message
										</label>
										<textarea name="message" className="form-control" />
									</div>
									<button
										type="submit"
										className={`btn submit ${sendStatus} btn-primary`}
									>
										{' '}
										{sendStatus === 'sending' && (
											<div className="loading-spinner"></div>
										)}
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
