import NavigationBar from './app/NavigationBar';
import Home from './features/home/Home';
import Projects from './features/projects/Projects';
import Contact from './features/contact/Contact';
import { Container } from 'react-bootstrap';
import About from './features/about/About';
import Carrer from './features/experiences/Career';
import { useRef, useEffect } from 'react';
import Skills from './features/skills/Skills2';
import content from './content/portfolio.json';

// const sections: Section[] = [
// 	{ route: '/', label: 'A Propos', mainElement: <Home /> },
// 	{ route: '/projets', label: 'Projets', mainElement: <Projects /> },
// 	{ route: '/experiences', label: 'Expériences', mainElement: <Experiences /> },
// 	{ route: '/competences', label: 'Compétences', mainElement: <Experiences /> },
// ];

function App() {
	const sectionRefs = useRef<HTMLDivElement[]>([]);

	useEffect(() => {
		document.title = content.home.pageTitle;
	}, []);
	return (
		<>
			<NavigationBar
				sections={content.home.navigation}
				sectionRefs={sectionRefs}
			/>
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
