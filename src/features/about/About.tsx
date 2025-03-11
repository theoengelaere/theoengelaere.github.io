import { Container, Row } from 'react-bootstrap';
import '../../css/about.css';
import { forwardRef } from 'react';

const About = forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<section className="banner about" id="aPropos" ref={ref}>
			<Container>
				<Row className="section-title">
					<h1>A propos de moi</h1>
				</Row>
				<Row>
					<span>
						&emsp;En tant qu'étudiant en troisième année de BUT Informatique à
						l'IUT de Lille, je suis passionné par le monde du développement.
					</span>
				</Row>
				<Row>
					<span>
						&emsp;Au cours de mes études, j'ai participé à une multitude de
						projets en travaillant au sein d'une équipe ou en autonomie. Cette
						diversité d'expériences m'a conduit à concevoir diverses
						applications et des sites web. En réalisant ces projets, j'ai eu
						l'opportunité de plonger concrètement dans le travail en équipe. Je
						suis actuellement ne stage chez WorldLine pour finaliser le parcours
						du BUT.
					</span>
				</Row>
				<Row>
					<span>
						&emsp; Je suis maintenant prêt à poursuivre mes études en Master ou
						en école d'ingénieur. Mon objectif est d'approndir mes compétences
						et de devenir un développeur capable de concevoir des solutions
						réellemenent innovantes tout en respectant les enjeux sociétaux
						d'aujourd'hui.
					</span>
				</Row>
			</Container>
		</section>
	);
});

export default About;
