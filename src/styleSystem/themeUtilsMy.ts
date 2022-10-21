class ColorVariation {
	private darkContrast: string;
	private lightContrast: string;
	constructor(
		public value: string,
		private contrastType: 'darkContrast' | 'lightContrast'
	) {
		this.darkContrast = '#000000';
		this.lightContrast = '#FFFFFF';
	}

	get contrast() {
		if (this.contrastType === 'darkContrast') {
			return this.darkContrast;
		} else {
			return this.lightContrast;
		}
	}
}

export class MainVariation extends ColorVariation {}

export class LightVariation extends ColorVariation {}

export class DarkVariation extends ColorVariation {}

interface Color {
	main: MainVariation;
	light: LightVariation;
	dark: DarkVariation;
}

interface ThemeMode {
	color1: Color;
	color2: Color;
	color3: Color;
	color4: Color;
	cardBg: string;
	bodyColor: string;
	quizBg: string;
}

export interface Palette {
	modes: {
		light: ThemeMode;
		dark: ThemeMode;
	};
}

