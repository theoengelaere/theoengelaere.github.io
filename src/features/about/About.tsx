import { Container, Row } from 'react-bootstrap';
import '../../css/about.css';
import { forwardRef } from 'react';
import content from '../../content/portfolio.json';

const About = forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<section className="banner about" id="aPropos" ref={ref}>
			<Container>
				<Row className="section-title">
					<h1>{content.home.about.title}</h1>
				</Row>
				{content.home.about.paragraphs.map(paragraph => (
					<Row key={paragraph}>
						<span>{paragraph}</span>
					</Row>
				))}
			</Container>
		</section>
	);
});

export default About;
