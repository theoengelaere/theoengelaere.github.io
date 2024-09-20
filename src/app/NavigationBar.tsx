import { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import '../css/navigationBar.css';

type Section = {
	// route: string;
	label: string;
	link: string;
	// mainElement: ReactElement;
};

const NavigationBar = ({
	sections,
	sectionRefs,
}: {
	sections: Section[];
	sectionRefs: React.MutableRefObject<HTMLDivElement[]>;
}) => {
	const [scrolled, setScrolled] = useState<boolean>(false);
	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	const [activeLink, setActiveLink] = useState<string>(sections[0].link);

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 50);

			const scrollPosition = window.scrollY + window.innerHeight / 2;
			// console.log(sectionRefs);
			sections.forEach(({ link }, index) => {
				const sectionRef = sectionRefs.current[index];

				if (sectionRef) {
					const sectionTop = sectionRef.offsetTop;
					const sectionHeight = sectionRef.offsetHeight;

					if (
						scrollPosition >= sectionTop &&
						scrollPosition < sectionTop + sectionHeight
					) {
						setActiveLink(link);
					}
				}
			});
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, [sections, sectionRefs]);

	useEffect(() => {
		console.log(activeLink);
		return () => {};
	}, [activeLink]);

	return (
		<Router>
			<Navbar
				expand="md"
				className={scrolled ? 'scrolled' : ''}
				expanded={isExpanded}
			>
				<Container className="nav-bar-main-container">
					<Navbar.Brand href="/">Théo Engelaere</Navbar.Brand>
					<Navbar.Toggle
						aria-controls="basic-navbar-nav"
						onClick={() => setIsExpanded(!isExpanded)}
					>
						<span className="navbar-toggler-icon"></span>
					</Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							{sections.map(({ link, label }) => (
								// <Nav.Link
								// 	key={link}
								// 	href={`#${link}`}
								// 	className={`nav-link mb-1 mb-lg-0 ${activeLink === link ? 'active' : ''}`}
								// 	onClick={() => {
								// 		setIsExpanded(false);
								// 		// setActiveLink(link);
								// 	}}
								// >
								// 	{label}
								// </Nav.Link>

								<a
									key={link}
									href={`#${link}`}
									className={`nav-link mb-1 mb-lg-0 ${activeLink === link ? 'active' : ''}`}
									onClick={() => {
										setIsExpanded(false);
										// setActiveLink(link);
									}}
								>
									{label}
								</a>
							))}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Router>
	);
};

export default NavigationBar;
export { type Section };
