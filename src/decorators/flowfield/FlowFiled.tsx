import { useEffect, useRef, useState } from 'react';
import Effect, { AngleFunction } from './Effect';
import useAnimationFrame from './useAnimationFrame';

export default function FlowField({ height }: { height: number }) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [ctx, setCtx] = useState<CanvasRenderingContext2D>(null);
	const [effect, setEffect] = useState<Effect>(null);

	const angleFunction: AngleFunction = (x, y, zoom, curve) => {
		// return Math.cos(x * zoom) + Math.sin(y * zoom) * curve;
		// return Math.cos(x * zoom * 0.5) + Math.sin(y * zoom * 0.5) * curve;

		return Math.cos((x * zoom) / 1.5) + (Math.sin(y * zoom) * curve) / 2;
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		setCtx(ctx);

		canvas.width = window.innerWidth;
		canvas.height = height;
		ctx.fillStyle = 'white';
		ctx.strokeStyle = 'white';
		ctx.lineWidth = 1;

		setEffect(
			new Effect(
				angleFunction,
				canvasRef.current.width,
				canvasRef.current.height,
				canvasRef.current.width,
				{ r: 1.3, g: 0.8, b: 0.6 }
				// { r: 1, g: 1.5, b: 2 }
			)
		);

		const handleResize = (e: Event) => {
			const width = (e.target as Window).innerWidth;
			canvas.width = width;
			canvas.height = height;
			if (effect) effect.resize(width, height);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [height]);

	useAnimationFrame(() => {
		if (effect) {
			effect.render(ctx);
		}
	}, [effect]);

	if (!height) return <></>;
	return <canvas ref={canvasRef} />;
}
