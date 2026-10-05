import { Container, Row } from 'react-bootstrap';
import '../../css/projects.css';
import ProjectCard, { ProjectCardProps } from './ProjectCard';
import { forwardRef } from 'react';
import content from '../../content/portfolio.json';

const projectImages = import.meta.glob<string>(
	'/src/assets/img/projects/**/*',
	{ eager: true, query: '?url', import: 'default' }
);

function resolveProjectImage(path: string): string {
	const image = projectImages[path];
	if (!image) throw new Error(`Project image not found: ${path}`);
	return image;
}

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
	const cardsProps: ProjectCardProps[] = content.projects.items.map(
		project => ({
			title: project.title,
			thumbnailPath: resolveProjectImage(project.thumbnail),
			year: project.year,
			tags: project.tags,
			imagesPaths: project.images.map(resolveProjectImage),
			description: project.description,
		})
	);
	return (
		<section id="projets" className="banner projects" ref={ref}>
			<Container>
				<Row className="section-title">
					<div className="col-12">
						<h1>{content.projects.title}</h1>
					</div>
				</Row>
				<Row>
					<div className="col-12">
						<div className="cards-container">
							{cardsProps.map((props, i) => (
								<ProjectCard props={props} key={i} />
							))}
						</div>
					</div>
				</Row>
			</Container>
		</section>
	);
});

export default Projects;
