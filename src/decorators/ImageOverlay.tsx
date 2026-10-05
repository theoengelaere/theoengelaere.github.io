import { useState } from 'react';
// import { X } from 'react-bootstrap-icons';
// import '../../css/imageOverlay.css';
export default function ImageOverlay({
	srcPath,
	alt,
	onClick,
}: {
	srcPath: string;
	alt: string;
	onClick: (e: React.MouseEvent) => void;
}) {
	const [overlayVisibility, setOverlayVisibility] = useState<boolean>(false);

	return (
		<div className="image-overlay-container">
			<img
				src={srcPath}
				alt={alt}
				className="image-preview zoomable"
				onClick={e => {
					// setOverlayVisibility(true);
					onClick(e);
				}}
			/>
			{overlayVisibility && (
				<div
					className="image-overlay-outer"
					onClick={() => setOverlayVisibility(false)}
					// style={{
					// 	visibility: overlayVisibility ? 'visible' : 'hidden',
					// 	opacity: overlayVisibility ? 1 : 0,
					// }}
				>
					<div className="image-overlay-inner">
						{/* <button
							className="close-image-overlay-button"
							onClick={() => setOverlayVisibility(false)}
						>
							<X />
						</button> */}
						<img src={srcPath} alt={alt} className="image-full-screen" />
					</div>
				</div>
			)}
		</div>
	);
}
