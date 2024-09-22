import { Container, Row } from 'react-bootstrap';
import '../../css/projects.css';
import ProjectCard, { ProjectCardProps } from './ProjectCard';
import chasse1 from '../../assets/img/projects/chasse/chasse_au_monstre_menu.png';
import chasse2 from '../../assets/img/projects/chasse/chasse_au_monstre_parametres.png';
import chasse3 from '../../assets/img/projects/chasse/chasse_au_monstre_vue_chasseur.png';
import chasse4 from '../../assets/img/projects/chasse/chasse_au_monstre_vue_monstre.png';
import chasse5 from '../../assets/img/projects/chasse/chasse_au_monstre_vue_monstre_brouillard.png';
import gestionnaire1 from '../../assets/img/projects/gestionnaire/3.png';
import gestionnaire2 from '../../assets/img/projects/gestionnaire/4.png';
import gestionnaire3 from '../../assets/img/projects/gestionnaire/5.png';
import gestionnaire4 from '../../assets/img/projects/gestionnaire/7.png';
import gestionnaire5 from '../../assets/img/projects/gestionnaire/9.png';
import pizza1 from '../../assets/img/projects/pizzaland/get_commandes.png';
import pizza2 from '../../assets/img/projects/pizzaland/delete_pizzas_id_id.png';
import pizza3 from '../../assets/img/projects/pizzaland/get_pizzas_id.png';
import pizza4 from '../../assets/img/projects/pizzaland/post_pizzas_id.png';
import shadow1 from '../../assets/img/projects/shadowWizards/shadow_wizard_menu.png';
import shadow2 from '../../assets/img/projects/shadowWizards/shadow_wizards_choose_character.png';
import shadow3 from '../../assets/img/projects/shadowWizards/shadow_wizard_1.png';
import shadow4 from '../../assets/img/projects/shadowWizards/shadow_wizard_2.png';
import shadow5 from '../../assets/img/projects/shadowWizards/shadow_wizard_game_over.png';
import { forwardRef } from 'react';

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
	const cardsProps: ProjectCardProps[] = [
		{
			title: 'Pizzaland API',
			thumbnailPath: pizza1,
			year: 2024,
			tags: ['API REST', 'Java', 'Tomcat', 'PostgreSQL'],
			imagesPaths: [pizza1, pizza2, pizza3, pizza4],
			description:
				"&emsp; Pizzaland API est un projet d'API REST sur le thème d'une pizzeria fictive que j'ai réalisée en autonomie. Elle est implémentée en Java, avec Tomcat pour le serveur et PostgreSQL pour la base de données. Elle met à disposition l'obtention de ressources en détails telles que les commandes enregistrées, les pizzas disponibles et leurs ingrédients. De nombreuses requêtes sont disponibles suivant les patternes CRUD (Create, Read, Update, Delete). Par exemple : modifier les ingrédients d'une pizza, modifier le prix d'un ingrédient, se répercutant sur les prix des pizzas et commandes, enregistrer et supprimer des commandes ou pizzas, etc... Le code de l'API REST repose sur le modèle DTO (Data Transfer Object) - DAO (Data Access Object) - Controllers, et renvoie les données au format Json. Les requêtes de méthode GET sont publiques, alors qu'un système d'authentification de type Authorization: Basic est implémenté pour les autres, afin de réserver la manipulation de la base de données aux administrateurs. J'ai également mis en place des scénarios de tests précis grâce à l'outil Bruno.",
		},
		{
			title: 'Shadow Wizards',
			thumbnailPath: shadow1,
			year: 2024,
			tags: ['JS', 'Express', 'Socket.io', 'Node.js'],
			imagesPaths: [shadow1, shadow2, shadow3, shadow4, shadow5],
			description:
				"&emsp; Shadow Wizards est un projet de Shoot-them-up multijoueur réalisé en Javascript avec Node.js et le framework Express, que j'ai réalisé en équipe. Les joueurs peuvent choisir leur nom, personnage et arme (boules de feus, pics de glace avec effet de ralentissement, ou lasers). Ils ont la possibilité de rejoindre une partie ou d'en commencer une nouvelle. L'objectif est de survivre le plus longtemps possible face à des vagues d'ennemis de plus en plus puissante. Des bonus de vie et de dégâts apparaissent aléatoirement lors de mort d'ennemis. La logique métier et l'affichage du jeu sont séparés et communiquent grâce à Socket.io. Les scores sont enregistrés et le classement global et visualisable par tous les joueurs.",
		},
		{
			title: 'Chasse Au Monstre',
			thumbnailPath: chasse1,
			year: 2023,
			tags: ['Java', 'MVC', 'Java FX', 'JUnit', 'A*'],
			imagesPaths: [chasse1, chasse2, chasse3, chasse4, chasse5],
			description:
				"&emsp; Ce projet est un jeu-vidéo en 2D au tour par tour développé en Java / JavaFx que j'ai réalisé au sein d'une équipe de 4 étudiants. Chaque joueur incarne un monstre devant s'échapper d'un labyrinthe ou un chasseur devant trouver la position des monstres, jouant leurs coups sur la carte. Une partie peut se dérouler également avec un joueur avec le rôle de son choix face à l'ordinateur. L'application adopte une architecture MVC constituée d'un modèle et de vues attribuées à chaque joueur. Le labyrinthe est généré procéduralement et les stratégies artificielles de l'ordinateur utilisent divers algorithmes, notamment A* pour celle du monstre. Ce projet a requis une analyse de cahier des charges en détails ainsi qu'une planification de tâches rigoureuse.",
		},
		{
			title: 'Gestionnaire de voyages scolaire',
			thumbnailPath: gestionnaire1,
			tags: ['Java', 'Java FX', 'Graphes'],
			year: 2023,
			imagesPaths: [
				gestionnaire1,
				gestionnaire2,
				gestionnaire3,
				gestionnaire4,
				gestionnaire5,
			],
			description:
				"&emsp; L'objectif de ce projet était de développer un gestionnaire de voyages scolaires en Java / JavaFx destiné aux organisateurs de voyages scolaires. Le principe de l'application est de répartir de manière optimisée des élèves invités chez des élèves hôtes d'un autre pays. Pour cela, les informations de chaque élève peuvent être saisies via un formulaire ou être importées via un fichier CSV. L'application génère ensuite automatiquement les paires d'élèves, de manière la plus optimisée possible. Pour cela, l'application utilise un graphe d'appariement qui prend en compte toutes les contraintes (allergies, régime alimentaire, …) et toutes les préférences (âge, centres d'intérêts, …) de chaque élève ainsi que d'éventuels impératifs de l'utilisateur. Les résultats sont visualisables en détails dans l'application et peuvent être ensuite sauvegardés via une serialisation ou exportés au format CSV.",
		},
	];
	return (
		<section id="projets" className="banner projects" ref={ref}>
			<Container>
				<Row className="section-title">
					<div className="col-12">
						<h1>Mes projets</h1>
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
