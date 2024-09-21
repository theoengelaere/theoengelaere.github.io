import NavigationBar, { Section } from './app/NavigationBar';
import Home from './features/home/Home';
import Projects from './features/projects/Projects';
import Contact from './features/contact/Contact';
import { Container } from 'react-bootstrap';
import About from './features/about/About';
import Skills from './features/skills/Skills';
import Carrer from './features/experiences/Career';
import { useRef, useEffect } from 'react';

// const sections: Section[] = [
// 	{ route: '/', label: 'A Propos', mainElement: <Home /> },
// 	{ route: '/projets', label: 'Projets', mainElement: <Projects /> },
// 	{ route: '/experiences', label: 'Expériences', mainElement: <Experiences /> },
// 	{ route: '/competences', label: 'Compétences', mainElement: <Experiences /> },
// ];

const sections: Section[] = [
	{ link: 'aPropos', label: 'A Propos' },
	{ link: 'competences', label: 'Compétences' },
	{ link: 'projets', label: 'Projets' },
	{ link: 'parcours', label: 'Parcours' },
];

function App() {
	const sectionRefs = useRef<HTMLDivElement[]>([]);

	useEffect(() => {
		document.title = 'Théo Engelaere - Portfolio';
	}, []);
	return (
		<>
			<NavigationBar sections={sections} sectionRefs={sectionRefs} />
			<Container className="features">
				<Home />
				<About ref={el => (sectionRefs.current[0] = el!)} />
				<Skills ref={el => (sectionRefs.current[1] = el!)} />
				<Projects ref={el => (sectionRefs.current[2] = el!)} />
				<Carrer ref={el => (sectionRefs.current[3] = el!)} />
				<Contact ref={el => (sectionRefs.current[4] = el!)} />
			</Container>
		</>
	);
}

export default App;
