import { useEffect, useState } from 'react';

type MousePosition = {
	x: number;
	y: number;
};

const useMousePosition = () => {
	const [mousePosition, setMousePosition] = useState<MousePosition>({
		x: null,
		y: null,
	});

	useEffect(() => {
		const updateMousePosition = (ev: MouseEvent) => {
			setMousePosition({ x: ev.clientX, y: ev.clientY });
		};

		window.addEventListener('mousemove', updateMousePosition);

		return () => {
			window.removeEventListener('mousemove', updateMousePosition);
		};
	}, []);

	return mousePosition;
};

export default useMousePosition;
export { type MousePosition };
