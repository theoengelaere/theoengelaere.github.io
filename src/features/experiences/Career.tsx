import { Container, Row } from 'react-bootstrap';
import '../../css/carrer.css';
import { forwardRef } from 'react';
import content from '../../content/portfolio.json';

const Career = forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<section id="parcours" className="career banner" ref={ref}>
			<Container>
				<Row className="section-title">
					<div className="col-12">
						<h1>{content.experiences.title}</h1>
					</div>
				</Row>
				<Row>
					<div className="col-12">
						<ul className="timeline">
							{content.experiences.items.map(experience => (
								<li key={`${experience.title}-${experience.date}`}>
									<div className="title">
										<h2>{experience.title}</h2>
										<span>{experience.date}</span>
									</div>
									<div className="description">
										<p>{experience.description}</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</Row>
			</Container>
		</section>
	);
});

export default Career;
