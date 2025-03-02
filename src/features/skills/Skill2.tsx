import { useState } from 'react';
import { Card, CardBody, CardTitle, Container, Row } from 'react-bootstrap';

const Skill = [
	{
		title: 'Backend',
		skills: [
			{
				title: 'React',
				description: 'Lorem ipsum, blabla bla bla bla oui oui oui oui',
			},
			{
				title: 'Java',
				description: 'Lorem ipsum, blabla bla bla bla oui oui oui oui',
			},
			{
				title: 'Truv',
				description: 'Lorem ipsum, blabla bla bla bla oui oui oui oui',
			},
			{
				title: 'machin',
				description: 'Lorem ipsum, blabla bla bla bla oui oui oui oui',
			},
			{
				title: 'chose',
				description: 'Lorem ipsum, blabla bla bla bla oui oui oui oui',
			},
		],
	},
	{
		title: 'Backend2',
		skills: [
			{
				title: 'React',
				description: 'Lorem ipsum, blabla bla bla bla oui oui oui oui',
			},
			{
				title: 'Java',
				description: 'Lorem ipsum, blabla bla bla bla oui oui oui oui',
			},
			{
				title: 'Truv',
				description: 'Lorem ipsum, blabla bla bla bla oui oui oui oui',
			},
			{
				title: 'machin',
				description: 'Lorem ipsum, blabla bla bla bla oui oui oui oui',
			},
			{
				title: 'chose',
				description: 'Lorem ipsum, blabla bla bla bla oui oui oui oui',
			},
		],
	},
	{
		title: 'Backend3',
		skills: [
			{
				title: 'React',
				description: 'Lorem ipsum, blabla bla bla bla oui oui oui oui',
			},
			{
				title: 'Java',
				description: 'Lorem ipsum, blabla bla bla bla oui oui oui oui',
			},
			{
				title: 'Truv',
				description: 'Lorem ipsum, blabla bla bla bla oui oui oui oui',
			},
			{
				title: 'machin',
				description: 'Lorem ipsum, blabla bla bla bla oui oui oui oui',
			},
			{
				title: 'chose',
				description: 'Lorem ipsum, blabla bla bla bla oui oui oui oui',
			},
		],
	},
	{
		title: 'Backend4',
		skills: [
			{
				title: 'React',
				description: 'Lorem ipsum, blabla bla bla bla oui oui oui oui',
			},
			{
				title: 'Java',
				description: 'Lorem ipsum, blabla bla bla bla oui oui oui oui',
			},
			{
				title: 'Truv',
				description: 'Lorem ipsum, blabla bla bla bla oui oui oui oui',
			},
			{
				title: 'machin',
				description: 'Lorem ipsum, blabla bla bla bla oui oui oui oui',
			},
			{
				title: 'chose',
				description: 'Lorem ipsum, blabla bla bla bla oui oui oui oui',
			},
		],
	},
	{
		title: 'Backend5',
		skills: [
			{
				title: 'React',
				description: 'Lorem ipsum, blabla bla bla bla oui oui oui oui',
			},
			{
				title: 'Java',
				description: 'Lorem ipsum, blabla bla bla bla oui oui oui oui',
			},
			{
				title: 'Truv',
				description: 'Lorem ipsum, blabla bla bla bla oui oui oui oui',
			},
			{
				title: 'machin',
				description: 'Lorem ipsum, blabla bla bla bla oui oui oui oui',
			},
			{
				title: 'chose',
				description: 'Lorem ipsum, blabla bla bla bla oui oui oui oui',
			},
		],
	},
];

export default function Skill2() {
	const [skillList, setSkillList] = useState<any>(Skill[0]);

	console.log(skillList);

	return (
		<section id="competences" className="skills banner">
			<Container>
				<Row className="section-title">
					<div className="col-12">
						<h1>Mes compétences</h1>
					</div>
				</Row>
			</Container>
			<Container>
				<Row className="align-items-end justify-content-center pb-0 gap-2 skills-nav">
					{Skill.map(s => (
						<div
							className={`col col-lg col-sm-3 py-1 skills-nav-item ${skillList.title == s.title ? 'active' : ''}`}
							key={s.title}
							onClick={() => setSkillList(s)}
						>
							<a
								className=""
								href="..."
								style={{
									textDecoration: 'inherit',
									color: 'inherit',
									height: '100%',
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
							<Row className="justify-content-start align-items-center margin-auto skill-list px-lg-5 ox-md-1 p-0">
								{skillList.skills.map((s, i) => (
									<div
										className="col col-lg-3 col-md-4 col-sm-6 skill-item py-2 ps-2 "
										key={i}
									>
										<h5 className="text-start">{s.title}</h5>
										<span className="skill-item-description p-2 border rounded-4">
											{s.description}
										</span>
									</div>
								))}
							</Row>
						</CardBody>
					</Card>
				</Row>
			</Container>
		</section>
	);
}
