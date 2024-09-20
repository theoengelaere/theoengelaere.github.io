import { Container, Row } from 'react-bootstrap';
import '../../css/about.css';
import { forwardRef } from 'react';

const About = forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<section className="banner about" id="about" ref={ref}>
			<Container>
				<Row className="section-title">
					<h1>A propos de moi</h1>
				</Row>
				<Row>
					<span>
						&emsp;En tant qu'étudiant en troisième année de BUT Informatique à
						l'IUT de Lille, je suis passionné par le monde du développement et
						mon apprentissage s'inscrit dans une démarche active d'acquisition
						de compétences. En vue d'enrichir mon expérience professionnelle, je
						suis actuellement à la recherche d'un stage pour avril 2024.
					</span>
				</Row>
				<Row>
					<span>
						&emsp;Au cours de mes études, j'ai participé à une multitude de
						projets en travaillant au sein d'une équipe ou en autonomie. Cette
						diversité d'expériences m'a conduit à concevoir des applications et
						des sites web. En réalisant ces projets, j'ai eu l'opportunité de
						plonger concrètement dans l'application des méthodes agiles. J'ai
						également réalisé un stage au sein de mon établissement lors de ma
						deuxième année.
					</span>
				</Row>
				<Row>
					<span>
						&emsp; Je suis maintenant prêt à relever de nouveaux défis et à
						apporter ma contribution au sein d'une entreprise. Mon objectif est
						de mettre en pratique mes compétences techniques et mon
						savoir-faire, tout en acquérant l'expertise d'une entreprise.
					</span>
				</Row>
			</Container>
		</section>
	);
});

export default About;
