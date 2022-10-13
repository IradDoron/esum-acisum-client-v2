type key = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface Breakpoints {
	values: {
		xs: number;
		sm: number;
		md: number;
		lg: number;
		xl: number;
	};
	unit: string;
	up(key: string): string;
	down(key: string): string;
	between(start: string, end: string): string;
}

const breakpoints: Breakpoints = {
	values: {
		xs: 0,
		sm: 600,
		md: 960,
		lg: 1280,
		xl: 1920,
	},
	unit: 'px',
	up(key: key) {
		const value = this.values[key];
		return `@media (min-width:${value}${this.unit})`;
	},
	down(key: key) {
		const value = this.values[key];
		return `@media (max-width:${value}${this.unit})`;
	},
	between(start: key, end: key) {
		const startValue = this.values[start];
		const endValue = this.values[end];
		return `@media (min-width:${startValue}${this.unit}) and (max-width:${endValue}${this.unit})`;
	},
};

export default breakpoints;
