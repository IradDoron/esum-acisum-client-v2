interface Border {
	radius: {
		xs: string;
		sm: string;
		md: string;
		lg: string;
		xl: string;
		pill: string;
		round: string;
	};
	width: {
		thin: string;
		medium: string;
		thick: string;

	}
    getBorderRadius: (radius: keyof Border['radius']) => string;
	getBorderWidth: (width: keyof Border['width']) => string;
}

const border: Border = {
	radius: {
		xs: '2px',
		sm: '4px',
		md: '8px',
		lg: '16px',
		xl: '32px',
		pill: '1000px',
		round: '50%',
	},
	width: {
		thin: '1px',
		medium: '2px',
		thick: '4px',
	},
    getBorderRadius: (radius) => border.radius[radius],
	getBorderWidth: (width) => border.width[width],
};

export default border;
