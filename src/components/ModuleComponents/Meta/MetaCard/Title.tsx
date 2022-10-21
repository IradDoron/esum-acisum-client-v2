// import types
import { BasicThemeProps } from '../../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import states
import { themeModeState, themeState } from '../../../../recoil/theme';

interface TitleProps {
	children: React.ReactNode;
	theme: any;
	themeMode: any;
	colorKey: 'color1' | 'color2' | 'color3' | 'color4';
}

const StyledTitle = styled.h2<TitleProps>`
	// Spacing
	margin-bottom: ${({ theme }) => theme.spacing.getSpace('xs2')};
	margin: auto;

	// Sizes
	border-bottom-width: 4px;
	width: fit-content;

	// Colors
	border-bottom-color: ${({ theme, themeMode, colorKey }) =>
		theme.palette.modes[themeMode][colorKey].main.value};

	// Borders
	border-bottom-style: solid;

	// Typography
	font-weight: normal;
	font-size: ${({ theme }) => theme.typography.getFontSize('md')};
`;

function Title(props: any) {
	const { children, colorKey } = props;
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	return (
		<StyledTitle theme={theme} themeMode={themeMode} colorKey={colorKey}>
			{children}
		</StyledTitle>
	);
}

export default Title;
