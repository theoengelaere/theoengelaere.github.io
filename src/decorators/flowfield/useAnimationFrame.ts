import { DependencyList, useEffect, useRef } from 'react';

const useAnimationFrame = (
	callback: (deltaTime: number) => void,
	reload: DependencyList
) => {
	const requestRef = useRef<number>();
	const previousTimeRef = useRef<number>();

	const animate = (time: number) => {
		if (previousTimeRef.current != undefined) {
			const deltaTime = time - previousTimeRef.current;
			callback(deltaTime);
		}
		previousTimeRef.current = time;
		requestRef.current = requestAnimationFrame(animate);
	};

	useEffect(() => {
		requestRef.current = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(requestRef.current);
	}, reload); //
};

export default useAnimationFrame;
