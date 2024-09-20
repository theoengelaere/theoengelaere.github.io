type AngleFunction = (
	x: number,
	y: number,
	zoom: number,
	curve: number
) => number;

class Particle {
	effect: Effect;
	x: number;
	y: number;
	speedX: number;
	speedY: number;
	speedModifier: number;
	history: [{ x: number; y: number }];
	maxLength: number;
	timer: number;
	color: string;
	angle: number;

	constructor(effect: Effect, color: string) {
		this.effect = effect;
		this.x = Math.floor(Math.random() * this.effect.width);
		this.y = Math.floor(Math.random() * this.effect.height);
		this.speedX = 0;
		this.speedY = 0;
		this.speedModifier = Math.random() * 5 + 1;
		this.history = [{ x: this.x, y: this.y }];
		this.maxLength = Math.floor(Math.random() * 100 + 50);
		this.timer = this.maxLength * 2;
		// const brightness = Math.random() * 200 + 55;
		// this.color = `rgb(${brightness}, ${brightness * 1.5}, ${brightness * 2})`;
		this.color = color;
		this.angle = 0;
	}

	draw(ctx: CanvasRenderingContext2D) {
		ctx.beginPath();
		ctx.moveTo(this.history[0].x, this.history[0].y);
		for (let i = 1; i < this.history.length; i++) {
			ctx.lineTo(this.history[i].x, this.history[i].y);
		}
		ctx.strokeStyle = this.color;
		ctx.stroke();
		ctx.closePath();
	}

	getAngle() {
		const x = Math.floor(this.x / this.effect.cellSize);
		const y = Math.floor(this.y / this.effect.cellSize);
		return this.effect.flowField[y * this.effect.nbCols + x];
	}

	update() {
		this.timer--;
		if (this.timer > 0) {
			this.angle = this.getAngle();
			this.speedX = Math.cos(this.angle * 2);
			this.speedY = Math.sin(this.angle / 2);
			this.x += this.speedX * this.speedModifier;
			this.y += this.speedY * this.speedModifier;
			this.history.push({ x: this.x, y: this.y });
			if (this.history.length > this.maxLength) {
				this.history.shift();
			}
		} else if (this.history.length > 1) {
			this.history.shift();
		} else if (this.timer < 1) {
			this.reset();
		}
	}

	reset() {
		this.x = Math.floor(Math.random() * this.effect.width);
		this.y = Math.floor(Math.random() * this.effect.width);
		this.history = [{ x: this.x, y: this.y }];
		this.timer = this.maxLength * 2;
	}
}

class Effect {
	angleFunction: AngleFunction;
	width: number;
	height: number;
	particles: Particle[];
	numberOfParticles: number;
	cellSize: number;
	nbRows: number;
	nbCols: number;
	flowField: number[];
	curve: number;
	zoom: number;
	debug: boolean;
	colorsRatios: { r: number; g: number; b: number };

	constructor(
		angleFunction: AngleFunction,
		width: number,
		height: number,
		numberOfParticles = 2500,

		colorsRatios = { r: 0, g: 0, b: 0 },
		cellSize = 15
	) {
		this.angleFunction = angleFunction;
		this.width = width;
		this.height = height;
		this.particles = [];
		this.numberOfParticles = numberOfParticles;
		this.cellSize = cellSize;
		this.nbRows = 0;
		this.nbCols = 0;
		this.flowField = [];
		this.curve = 2;
		this.zoom = 0.05;
		this.debug = false;
		this.colorsRatios = colorsRatios;

		this.init();
	}

	init() {
		this.nbRows = Math.ceil(this.height / this.cellSize);
		this.nbCols = Math.ceil(this.width / this.cellSize);
		this.flowField = [];
		for (let y = 0; y < this.nbRows; y++) {
			for (let x = 0; x < this.nbCols; x++) {
				const angle = this.angleFunction(x, y, this.zoom, this.curve);
				this.flowField.push(angle);
			}
		}
		this.particles = [];
		for (let i = 0; i < this.numberOfParticles / 3; i++) {
			const brightness = Math.random() * 200 + 55;
			const color = `rgb(${brightness * this.colorsRatios.r}, ${brightness * this.colorsRatios.g}, ${brightness * this.colorsRatios.b})`;
			this.particles.push(new Particle(this, color));
		}
	}

	resize(w: number, h: number) {
		this.width = w;
		this.height = h;
		this.init();
	}

	render(ctx: CanvasRenderingContext2D) {
		if (this.particles.length < this.numberOfParticles) {
			const brightness = Math.random() * 200 + 55;
			const color = `rgb(${brightness * this.colorsRatios.r}, ${brightness * this.colorsRatios.g}, ${brightness * this.colorsRatios.b})`;
			this.particles.push(new Particle(this, color));
		}
		ctx.clearRect(0, 0, this.width, this.height);
		for (let i = 0; i < this.particles.length; i++) {
			this.particles[i].draw(ctx);
			this.particles[i].update();
		}
	}
}

export default Effect;
export { Particle, type AngleFunction };
