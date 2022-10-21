type fontSizeValueKey =
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

type letterSpacingValueKey =
	| 'xs3'
	| 'xs2'
	| 'xs'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| 'xl2';

interface Typography {
	fontSizeValues: {
		[sizeValueKey: string]: number;
	};
	letterSpacingValues: {
		[sizeValueKey: string]: number;
	};
	unit: string;
	getFontSize(sizeValueKey: fontSizeValueKey): string;
	getLetterSpacing(sizeValueKey: letterSpacingValueKey): string;
	fontFamilies: {
		[fontFamilyKey: string]: string;
	};
}

const typography: Typography = {
	fontSizeValues: {
		xs3: 0.5,
		xs2: 0.75,
		xs: 1,
		sm: 1.2,
		md: 1.4,
		lg: 1.6,
		xl: 1.8,
		xl2: 2,
		xl3: 2.2,
		xl4: 2.4,
		xl5: 2.6,
		xl6: 2.8,
		xl7: 3,
		xl8: 3.2,
		xl9: 3.4,
		xl10: 3.6,
		xl11: 3.8,
		xl12: 4,
		xl13: 4.2,
		xl14: 4.4,
		xl15: 4.6,
		xl16: 4.8,
		xl17: 5,
		xl18: 5.2,
		xl19: 5.4,
		xl20: 5.6,
		xl21: 5.8,
		xl22: 6,
		body: 0.938,
	},
	letterSpacingValues: {
		xs3: -0.3,
		xs2: -0.2,
		xs: -0.1,
		sm: 0,
		md: 0.05,
		lg: 0.1,
		xl: 0.15,
		xl2: 0.2,

	
	},
	unit: 'rem',
	getFontSize(sizeValueKey: fontSizeValueKey) {
		return `${this.fontSizeValues[sizeValueKey]}${this.unit}`;
	},
	getLetterSpacing(sizeValueKey: letterSpacingValueKey) {
		return `${this.letterSpacingValues[sizeValueKey]}${this.unit}`;
	},
	fontFamilies: {
		primary: 'Roboto',
		secondary: 'Roboto',
		body: 'Helvetica Neue, Helvetica, Arial, sans-serif',
	},
};

export default typography;
