import {
	DarkVariation,
	LightVariation,
	MainVariation,
	Palette,
} from './themeUtilsMy';

const palette: Palette = {
	modes: {
		light: {
			color1: {
				main: new MainVariation('#0CB4A7', 'lightContrast'),
				light: new LightVariation('#DFEEED', 'lightContrast'),
				dark: new DarkVariation('#206A65', 'lightContrast'),
			},
			color2: {
				main: new MainVariation('#4E0ED9', 'lightContrast'),
				light: new LightVariation('#DFEEED', 'lightContrast'),
				dark: new DarkVariation('#206A65', 'lightContrast'),
			},
			color3: {
				main: new MainVariation('#D91E75', 'lightContrast'),
				light: new LightVariation('#DFEEED', 'lightContrast'),
				dark: new DarkVariation('#206A65', 'lightContrast'),
			},
			color4: {
				main: new MainVariation('#F24738', 'lightContrast'),
				light: new LightVariation('#DFEEED', 'lightContrast'),
				dark: new DarkVariation('#206A65', 'lightContrast'),
			},
			cardBg: '#FFFFFF',
		},
		dark: {
			color1: {
				main: new MainVariation('#0CB4A7', 'lightContrast'),
				light: new LightVariation('#DFEEED', 'lightContrast'),
				dark: new DarkVariation('#206A65', 'lightContrast'),
			},
			color2: {
				main: new MainVariation('#0CB4A7', 'lightContrast'),
				light: new LightVariation('#DFEEED', 'lightContrast'),
				dark: new DarkVariation('#206A65', 'lightContrast'),
			},
			color3: {
				main: new MainVariation('#0CB4A7', 'lightContrast'),
				light: new LightVariation('#DFEEED', 'lightContrast'),
				dark: new DarkVariation('#206A65', 'lightContrast'),
			},
			color4: {
				main: new MainVariation('#0CB4A7', 'lightContrast'),
				light: new LightVariation('#DFEEED', 'lightContrast'),
				dark: new DarkVariation('#206A65', 'lightContrast'),
			},
			cardBg: '#222222',
		},
	},
};

export default palette;
