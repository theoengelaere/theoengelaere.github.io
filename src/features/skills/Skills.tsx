import { Container, Row } from 'react-bootstrap';
import '../../css/skills.css';
import { forwardRef } from 'react';

import javascript from '../../assets/img/logos/JavaScript-logo.png';
import jakarta from '../../assets/img/logos/Jakarta_logo.png';
import reactLogo from '../../assets/img/logos/react_logo.png';
import postgres from '../../assets/img/logos/PostgreSQL_logo.3colors.540x557.png';
import tomcat from '../../assets/img/logos/Apache_Tomcat_logo.svg.png';
import bootstraplogo from '../../assets/img/logos/bootstrap_logo.png';
import csslogo from '../../assets/img/logos/css_logo.png';
import tdd from '../../assets/img/logos/cycle-tdd.jpg';
import d3logo from '../../assets/img/logos/d3_logo.png';
import dockerlogo from '../../assets/img/logos/docker-mark-blue.png';
import expresslogo from '../../assets/img/logos/express_logo.png';
import javalogo from '../../assets/img/logos//icons8-logo-java-coffee-cup-240.png';
import javafxlogo from '../../assets/img/logos/javafx_logo.jpg';
import junit from '../../assets/img/logos/junit5-logo.png';
import maven from '../../assets/img/logos/maven_logo.svg';
import mvc from '../../assets/img/logos/MVC-design-pattern.png';
import openlayers from '../../assets/img/logos/OpenLayers_logo.svg.png';
// import swaggerui from '../../assets/img/logos/swagger_ui_logo_no_text.png';
import tanstack from '../../assets/img/logos/tanstack_logo.png';
import nodejs from '../../assets/img/logos/Node.js_logo.png';

import { type ReactNode } from 'react';
import Slider from '../../decorators/Slider';
import decodeHTML from '../tools/decodeHTML';

type SkillCardProps = {
	title: string;
	imgLink: string;
};

type SkillProps = {
	title: string;
	description: string;
	cards: SkillCardProps[];
};

const Skills = forwardRef<HTMLDivElement>((_, ref) => {
	const mySkills: SkillProps[] = [
		{
			title: 'Développement web back-end',
			description:
				"&emsp; Je suis à l'aise en développement web back-end et maîtrise la création de site web et d'API REST sécurisées en Java EE, en utilisant Tomcat comme serveur et PostgreSQL pour la base de données. Je suis également à l'aise dans le développement d'API avec Express.js et MySQL, et dans l'utilisation de Docker et Docker Compose pour la gestions des conteneurs hébergeant les bases de données. De plus, je sais intégrer divers outils comme Carbone pour la génération de documents ou Nodemailer pour l'envoir d'emails",
			cards: [
				{ title: '', imgLink: jakarta },
				{ title: 'PostgreSQL', imgLink: postgres },
				{ title: 'Docker', imgLink: dockerlogo },
				{ title: 'Tomcat', imgLink: tomcat },
				{ title: '', imgLink: nodejs },
				{ title: 'Express.js', imgLink: expresslogo },
			],
		},
		{
			title: 'Développement web front-end',
			description:
				"&emsp; Côté front-end, je suis capable de développer des interfaces complexes et dynamiques avec React. Je maîtrise plusieurs bibliothèques essentielles comme TanStack Table pour créer des tables HTML interactives, D3.js pour des visualisations graphiques avancées ou OpenLayers pour l'intégration de cartes interactives. En matière de style, je suis à l'aise en CSS et utilise Bootstrap pour concevoir des interfaces esthétiques et responsives.",
			cards: [
				{ title: '', imgLink: nodejs },
				{ title: 'Javascript', imgLink: javascript },
				{ title: 'React', imgLink: reactLogo },
				{ title: 'Tanstack Table', imgLink: tanstack },
				{ title: 'Bootstrap', imgLink: bootstraplogo },
				{ title: 'CSS', imgLink: csslogo },
				{ title: 'D3.js', imgLink: d3logo },
				{ title: 'OpenLayers', imgLink: openlayers },
			],
		},
		{
			title: "Développement d'applications",
			description:
				"&emsp; Je sais développer des applications en Java, en utilisant JavaFX pour l'interface graphique. Je mâitrise l'architecture MVC (Modèle-Vue-Contrôleur) qui permet une séparation claire des responsabilités. De plus, ma formation à l'IUT m'a appris la pratique du Test-Driven Development (TDD) pour assurer une qualité de code optimale, et l'utilisation de JUnit et Maven pour réaliser le test-coverage et gérer les dépendances du projet.",
			cards: [
				{ title: 'Java', imgLink: javalogo },
				{ title: '', imgLink: javafxlogo },
				{ title: 'Maven', imgLink: maven },
				{ title: 'Junit', imgLink: junit },
				{ title: 'TDD', imgLink: tdd },
				{ title: 'MVC', imgLink: mvc },
			],
		},
	];

	const buildCardsNode = (cardsProps: SkillCardProps[]): ReactNode[] => {
		const res: ReactNode[] = [];
		cardsProps.map(({ title, imgLink }) => {
			res.push(
				<>
					<h2>{title}</h2>
					<img src={imgLink} alt="Logo" />
				</>
			);
		});
		return res;
	};

	return (
		<section id="competences" className="skills banner" ref={ref}>
			<Container>
				<Row className="section-title">
					<div className="col-12">
						<h1>Mes compétences</h1>
					</div>
				</Row>
				{mySkills.map(({ title, description, cards }, i) => (
					<Row className="skill-row" key={i}>
						<h3>{title}</h3>
						<div className="col-md-7 skill-description">
							<p>{decodeHTML(description)}</p>
						</div>
						<div className="col-md-5">
							<Slider
								cards={buildCardsNode(cards)}
								nextVisibleCards={1}
								wrapperHeight="200px"
								cardsWidth="200px"
							/>
						</div>
					</Row>
				))}
			</Container>
		</section>
	);
});

export default Skills;
