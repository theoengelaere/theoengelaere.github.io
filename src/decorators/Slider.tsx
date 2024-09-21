import {
	CSSProperties,
	type ReactNode,
	useEffect,
	useRef,
	useState,
} from 'react';
import arrow1 from '../assets/img/arrow1.svg';
import arrow2 from '../assets/img/arrow2.svg';
import '../css/slider.css';

type SliderProps = {
	firstCardIdx?: number;
	cards: ReactNode[];
	nextVisibleCards?: number;
	wrapperHeight?: string;
	cardsWidth?: string;
	enableAutoMode?: boolean;
	enableManualMode?: boolean;
};

type CardStyleProps = {
	transform: string;
	zIndex: string;
	filter: string;
	opacity: string;
};

export default function Slider({
	cards,
	firstCardIdx = 0,
	nextVisibleCards = 0,
	cardsWidth = '200px',
	wrapperHeight = '200px',
	enableAutoMode = true,
	enableManualMode = true,
}: SliderProps) {
	const elRefs = useRef([]);
	const [active, setActive] = useState<number>(firstCardIdx);
	const [autoMode, setAutoMode] = useState<boolean>(enableAutoMode);
	const delay = Math.floor(Math.random() * 1000);

	useEffect(() => {
		const updateCardStyle = (
			card: HTMLElement,
			{ transform, zIndex, filter, opacity }: CardStyleProps
		): void => {
			card.style.transform = transform;
			card.style.zIndex = zIndex;
			card.style.filter = filter;
			card.style.opacity = opacity;
		};

		function loadShow() {
			const card: HTMLElement = elRefs.current[active];

			updateCardStyle(card, {
				transform: 'none',
				zIndex: '1',
				filter: 'none',
				opacity: '1',
			});

			card.style.transform = 'none';
			card.style.zIndex = '1';
			card.style.filter = 'none';
			card.style.opacity = '1';
			let stt = 0;
			for (let i = active + 1; i < elRefs.current.length; i++) {
				stt++;
				const card: HTMLElement = elRefs.current[i];
				card.style.transform = `translateX(${110 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-4deg)`;
				card.style.zIndex = `${-stt}`;
				card.style.filter = 'blur(5px)';
				card.style.opacity = stt > nextVisibleCards ? '0' : '0.3';
				// card.style.display = stt > nextVisibleCards + 1 ? 'none' : 'flex';
			}
			stt = 0;
			for (let i = active - 1; i >= 0; i--) {
				stt++;
				const card: HTMLElement = elRefs.current[i];
				card.style.transform = `translateX(${-110 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(4deg)`;
				card.style.zIndex = `${-stt}`;
				card.style.filter = 'blur(5px)';
				card.style.opacity = stt > nextVisibleCards ? '0' : '0.3';
				// card.style.display = stt > nextVisibleCards + 1 ? 'none' : 'flex';
			}
		}
		loadShow();
	}, [active]);

	useEffect(() => {
		let swipeAuto = null;
		if (autoMode && enableAutoMode) {
			swipeAuto = setTimeout(() => {
				swipeCard(1, 'auto');
			}, 3000 + delay);
		}
		return () => {
			if (swipeAuto) clearTimeout(swipeAuto);
		};
	}, [active, autoMode, enableAutoMode]);

	const swipeCard = (direction: 1 | -1, method: 'auto' | 'manual'): void => {
		setActive(prev => {
			if (prev + direction >= cards.length) return 0;
			if (prev + direction < 0) return cards.length - 1;
			return prev + direction;
		});

		if (method === 'manual') {
			setAutoMode(false);
			// setTimeout(() => {
			// 	setAutoMode(true);
			// }, 10000);
		}
	};

	return (
		<div className="slider">
			<div className="wrapper" style={{ height: wrapperHeight }}>
				{cards.map((card, i) => (
					<div
						className="card"
						key={i}
						ref={ref => (elRefs.current[i] = ref)}
						style={
							{
								transform: 'translateX(3px)',
								width: cardsWidth,
								'--slider-card-width': cardsWidth,
							} as CSSProperties
						}
						onClick={e => {
							console.log(i + '  ' + active);
							if (i != active) {
								e.stopPropagation();
							}
						}}
					>
						{card}
					</div>
				))}
			</div>
			{enableManualMode && (
				<>
					<button id="next" onClick={() => swipeCard(1, 'manual')}>
						<img src={arrow2} alt=">" />
					</button>
					<button id="prev" onClick={() => swipeCard(-1, 'manual')}>
						<img src={arrow1} alt="<" />
					</button>
				</>
			)}
		</div>
	);
}

export { type SliderProps };
