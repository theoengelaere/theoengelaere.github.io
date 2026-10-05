import { useState, useEffect, useRef } from 'react';
import { Container, Row } from 'react-bootstrap';
import {
	ArrowDown,
	// ArrowDown,
	Envelope,
	FileEarmarkArrowDown,
} from 'react-bootstrap-icons';
import '../../css/home.css';
import '../../css/navigationBar.css';
import linkedin from '../../assets/img/logos/linkedin_logo.png';
import FlowField from '../../decorators/flowfield/FlowFiled';
import content from '../../content/portfolio.json';

export default function Home() {
	const homeRef = useRef(null);
	const [homeHeight, setHomeHeight] = useState(0);

	function downloadCV() {
		const link = document.createElement('a');
		link.href = content.home.hero.cvPath;
		link.download = content.home.hero.cvFileName;
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
							<h1>{content.home.hero.title}</h1>
						</div>
					</Row>
					<Row>
						<div className="col-12">
							<h3>{content.home.hero.subtitle}</h3>
						</div>
					</Row>
					<Row>
						<div className="col-12">
							<span className="home-buttons">
								<button
									onClick={() => {
										window.open(content.home.hero.linkedinUrl, '_blank');
									}}
								>
									<img src={linkedin} alt="" />
									<span>{content.home.hero.linkedinLabel}</span>
								</button>
								<button onClick={downloadCV}>
									<FileEarmarkArrowDown />
									<span>{content.home.hero.cvLabel}</span>
								</button>
								<button
									onClick={() => {
										const link = document.createElement('a');
										link.href = '#contact';
										link.click();
									}}
								>
									<Envelope />
									<span>{content.home.hero.contactLabel}</span>
								</button>
							</span>
						</div>
					</Row>
				</Container>
				<div className="next">
					<span>{content.home.hero.aboutLabel}</span>
					<a href="#aPropos">
						<ArrowDown />
					</a>
				</div>
				<div className="overlay">
					<FlowField height={homeHeight} />
				</div>
			</section>
		</>
	);
}
