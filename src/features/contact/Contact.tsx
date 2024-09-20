import { Container } from 'react-bootstrap';
import '../../css/contact.css';
// import { CaretRightFill } from 'react-bootstrap-icons';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { forwardRef } from 'react';

const Contact = forwardRef<HTMLDivElement>((_, ref) => {
	const form = useRef();

	const sendEmail = (e: React.FormEvent) => {
		e.preventDefault();

		emailjs
			.sendForm('service_un820te', 'template_d98kflq', form.current, {
				publicKey: 'kIOiQ0cgBLutmBJ78',
			})
			.then(
				() => {
					console.log('Email envoyé avec succès');
				},
				error => {
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
									N'hésitez pas à me laiser un message
								</h2>
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
									<button type="submit" className="btn btn-primary">
										Envoyer
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
