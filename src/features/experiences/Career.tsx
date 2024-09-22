import { Container, Row } from 'react-bootstrap';
import '../../css/carrer.css';
import { forwardRef } from 'react';

const Career = forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<section id="parcours" className="career banner" ref={ref}>
			<Container>
				<Row className="section-title">
					<div className="col-12">
						<h1>Mon parcours</h1>
					</div>
				</Row>
				<Row>
					<div className="col-12">
						<ul className="timeline">
							<li>
								<div className="title">
									<h2>Stage à l'IUT</h2>
									<span>2024</span>
								</div>
								<div className="description">
									<p>
										&emsp; J'ai réalisé un stage de 3 mois à l'IUT, dans le
										cadre de ma deuxième année d'études. La mission qui m'a
										était attribuée consistait à réaliser une refonte complète
										d'un vieux site développé en PHP. L'objectif était de
										séparer le back-end du front-end en développant une API REST
										avec Express.js et une application en React. Ce stage a été
										l'occasion de surmonter de nombreux défis techniques,
										d'enrichir mes compétences et de découvrir des technologies.
										J'ai su mené à bien cette mission, et cette première
										expérience professionnelle m'a permis d'acroître ma
										confiance en mes capacités.
									</p>
								</div>
							</li>
							<li>
								<div className="title">
									<h2>BUT Informatique</h2>
									<span>2022 - Présent</span>
								</div>
								<div className="description">
									<p>
										&emsp; Lors de mon inscription à l'université, le BUT
										Informatique a été mon premier choix en raison de ma grande
										curiosité pour le monde de la programmation. Très
										rapidement, ma passion pour le développement s'est affirmée
										et je me suis investi pleinement dans mes cours. Je suis
										actuellement en 3e année, et suis le parcours en
										développement et réalisation d'applications, qui m'a permis
										d'approfondir mes connaissances et de développer des
										compétences concrètes dans le domaine.
									</p>
								</div>
							</li>
							<li>
								<div className="title">
									<h2>BAC S</h2>
									<span>2020</span>
								</div>
								<div className="description">
									<p>
										&emsp;J'ai obtenu un Baccalauréat Scientifique, mention
										Bien, au Lycée Queneau (Villeneuve-d'Ascq).
									</p>
								</div>
							</li>
						</ul>
					</div>
				</Row>
			</Container>
		</section>
	);
});

export default Career;
