import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';
import '../css/imageSlider.css';
import '../css/imageOverlay.css';

type ImageSliderProps = {
	imageUrls: string[];
};

export default function ImageSlider({ imageUrls }: ImageSliderProps) {
	const [imageIndex, setImageIndex] = useState<number>(0);
	const [overlayVisibility, setOverlayVisibility] = useState<boolean>(false);

	const showNextImage = () => {
		setImageIndex(prev => {
			if (prev == imageUrls.length - 1) return 0;
			return prev + 1;
		});
	};

	const showPrevImage = () => {
		setImageIndex(prev => {
			if (prev == 0) return imageUrls.length - 1;
			return prev - 1;
		});
	};

	return (
		<div
			style={{ width: '100%', height: '100%', position: 'relative' }}
			className="image-overlay-container"
		>
			<img
				src={imageUrls[imageIndex]}
				alt="IMAGE"
				className="img-slider-img zoomable"
				onClick={() => setOverlayVisibility(true)}
			/>
			<button
				className="img-slider-btn prev"
				style={{ left: 0 }}
				onClick={showPrevImage}
			>
				<ArrowLeft />
			</button>
			<button
				className="img-slider-btn next"
				style={{ right: 0 }}
				onClick={showNextImage}
			>
				<ArrowRight />
			</button>
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
						<img
							src={imageUrls[imageIndex]}
							alt="IMAGE"
							className="image-full-screen"
						/>
					</div>
				</div>
			)}
		</div>
	);
}
