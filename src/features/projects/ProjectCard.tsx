import { type CSSProperties, useEffect, useRef, useState } from 'react';
import useMousePosition from '../tools/useMousePosition';
import { X } from 'react-bootstrap-icons';
import decodeHTML from '../tools/decodeHTML';
import { Container, Row } from 'react-bootstrap';
import ImageSlider from '../../decorators/ImageSlider';

type ProjectCardProps = {
	title: string;
	thumbnailPath: string;
	year: number;
	tags: string[];
	imagesPaths: string[];
	description: string;
};

export default function ProjectCard({ props }: { props: ProjectCardProps }) {
	const {
		title,
		thumbnailPath,
		year,
		tags,
		imagesPaths,
		description,
	}: ProjectCardProps = props;
	const mousePosition = useMousePosition();
	const [offsets, setOffsets] = useState<{ x: number; y: number }>({
		x: 0,
		y: 0,
	});
	const ref = useRef(null);
	const [overlayVisibility, setOverlayVisibility] = useState<boolean>(false);
	// const [enableAutoSlider, setEnableAutoSlider] = useState<boolean>(true);
	// const images = imagesPaths.map((path, i) => (
	// 	<ImageOverlay
	// 		srcPath={path}
	// 		key={i}
	// 		onClick={() => {
	// 			setEnableAutoSlider(false);
	// 		}}
	// 	/>
	// ));

	useEffect(() => {
		const rect = ref.current.getBoundingClientRect();
		if (rect)
			setOffsets({
				x: mousePosition.x - rect.left,
				y: mousePosition.y - rect.top,
			});
	}, [mousePosition]);

	const closeOverlay = () => {
		setOverlayVisibility(false);
		// setEnableAutoSlider(true);
	};

	return (
		<div
			className="project-card"
			ref={ref}
			style={
				{
					'--x': `${offsets.x}px`,
					'--y': `${offsets.y}px`,
				} as CSSProperties
			}
		>
			<div className="card-content" onClick={() => setOverlayVisibility(true)}>
				<div className="card-heading">
					<h3>{title}</h3>
					<span>{year}</span>
				</div>
				<img src={thumbnailPath} alt="IMAGE" />
				<div className="description">
					<span>{tags.join().replaceAll(',', ' | ')}</span>
				</div>
			</div>
			{overlayVisibility && (
				<div className="card-overlay" onClick={closeOverlay}>
					<Container className="card-overlay-content-container">
						<Row>
							<div
								className="col-12 card-overlay-content"
								onClick={e => e.stopPropagation()}
							>
								<button
									className="close-card-overlay-button"
									onClick={closeOverlay}
								>
									<X />
								</button>
								<h1>{title}</h1>
								<ImageSlider imageUrls={imagesPaths} />
								<p>{decodeHTML(description)}</p>
							</div>
						</Row>
					</Container>
				</div>
			)}
		</div>
	);
}

export { type ProjectCardProps };
