type spacingValueKey =
	| 'xs3'
	| 'xs2'
	| 'xs'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| 'xl2'
	| 'xl3'
	| 'xl4'
	| 'xl5'
	| 'xl6'
	| 'xl7'
	| 'xl8'
	| 'xl9'
	| 'xl10'
	| 'xl11'
	| 'xl12'
	| 'xl13'
	| 'xl14'
	| 'xl15'
	| 'xl16'
	| 'xl17'
	| 'xl18'
	| 'xl19'
	| 'xl20'
	| 'xl21'
	| 'xl22';

interface Spacing {
	spacingValues: {
		[sizeValueKey: string]: number;
	};
	unit: string;
	getSpace(sizeValueKey: spacingValueKey): string;
}

const spacing: Spacing = {
	spacingValues: {
		xs3: 8,
		xs2: 16,
		xs: 24,
		sm: 32,
		md: 40,
		lg: 48,
		xl: 56,
		xl2: 64,
		xl3: 72,
		xl4: 80,
		xl5: 88,
		xl6: 96,
		xl7: 104,
		xl8: 112,
		xl9: 120,
		xl10: 128,
	},
	unit: 'px',
	getSpace(sizeValueKey: spacingValueKey) {
		return `${this.spacingValues[sizeValueKey]}${this.unit}`;
	},
};

export default spacing;