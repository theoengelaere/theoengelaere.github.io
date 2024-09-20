import { useState, useEffect, useRef } from 'react';
import { Container, Row } from 'react-bootstrap';
import {
	// ArrowDown,
	Envelope,
	FileEarmarkArrowDown,
} from 'react-bootstrap-icons';
import '../../css/home.css';
import '../../css/navigationBar.css';
import linkedin from '../../assets/img/logos/linkedin_logo.png';
import FlowField from '../../decorators/flowfield/FlowFiled';

export default function Home() {
	const homeRef = useRef(null);
	const [homeHeight, setHomeHeight] = useState(0);

	function downloadCV() {
		const link = document.createElement('a');
		link.href = '/CV_Theo_Engelaere_2024.pdf';
		link.download = 'CV_Theo_Engelaere_2024.pdf';
		link.target = '_blank';
		link.click();
	}

	useEffect(() => {
		// Met à jour la hauteur au montage du composant
		setHomeHeight(homeRef.current.clientHeight);

		const handleResize = () => {
			setHomeHeight(homeRef.current.clientHeight);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			<section ref={homeRef} className="banner home" id="accueil">
				<Container>
					<Row>
						<div className="col-12">
							<h1>Etudiant en 3e année de BUT Informatique</h1>
						</div>
					</Row>
					<Row>
						<div className="col-12">
							<h3>
								Je suis à la recherche d'un stage en développement pour mars
								2025
							</h3>
						</div>
					</Row>
					<Row>
						<div className="col-12">
							<span className="home-buttons">
								<button
									onClick={() => {
										window.open(
											'https://www.linkedin.com/in/theo-engelaere',
											'_blank'
										);
									}}
								>
									<img src={linkedin} alt="Logo" />
									<span>Me Suivre</span>
								</button>
								<button onClick={downloadCV}>
									<FileEarmarkArrowDown />
									<span>Télécharger mon CV</span>
								</button>
								<button
									onClick={() => {
										const link = document.createElement('a');
										link.href = '#contact';
										link.click();
									}}
								>
									<Envelope />
									<span>Me Contacter</span>
								</button>
							</span>
						</div>
					</Row>
				</Container>
				<div className="overlay">
					<FlowField height={homeHeight} />
				</div>
			</section>
		</>
	);
}
