import { forwardRef, useState } from 'react';
import { Card, CardBody, Container, Row } from 'react-bootstrap';
import skills from './skills.json';

interface SkillList {
	title: string;
	list: string[];
}

const Skills = forwardRef<HTMLDivElement>((_, ref) => {
	const [skillList, setSkillList] = useState<SkillList>(skills[0]);
	return (
		<section id="competences" className="skills banner" ref={ref}>
			<Container>
				<Row className="section-title">
					<div className="col-12">
						<h1>Mes compétences</h1>
					</div>
				</Row>
				<Row
					className="align-items-end justify-content-center pb-0 gap-2 skills-nav"
					style={{ height: '90px' }}
				>
					{skills.map(s => (
						<div
							className={`col py-1 skills-nav-item ${skillList.title == s.title ? 'active' : ''}`}
							key={s.title}
							onClick={() => setSkillList(s)}
						>
							<a
								className=""
								href="..."
								style={{
									textDecoration: 'inherit',
									color: 'inherit',
								}}
								onClick={e => e.preventDefault()}
							>
								<h3 className="w-100 m-auto py-2">{s.title}</h3>
							</a>
						</div>
					))}
				</Row>
				<Row className="skill-card-container p-2">
					<Card>
						{/* <CardTitle className="display-6">{skillList.title}</CardTitle> */}
						<CardBody>
							<Row className="justify-content-start align-items-center margin-auto skill-list px-lg-5 ox-md-3 p-0">
								{skillList.list.map((s, i) => (
									<div className="col skill-item py-2 ps-2 " key={i}>
										<h5 className="text-start">{s}</h5>
										{/* <span className="skill-item-description p-2 border rounded-4">
											{s}
										</span> */}
									</div>
								))}
							</Row>
						</CardBody>
					</Card>
				</Row>
			</Container>
		</section>
	);
});

export default Skills;
