export interface BasicThemeProps {
	theme: any;
	themeMode: string;
}

export interface ThemePropsWithColorKey extends BasicThemeProps {	
	colorKey: 'color1' | 'color2' | 'color3' | 'color4'
}