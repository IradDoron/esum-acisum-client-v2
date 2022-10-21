// import types
import { ThemePropsWithColorKey } from '../../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import states
import { themeModeState, themeState } from '../../../../recoil/theme';

const StyledContainer = styled.div<ThemePropsWithColorKey>`
	// Colors

	background-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].cardBg};

	// Spacing
	margin: auto;
	margin-top: ${({ theme }) => theme.spacing.getSpace('md')};
	padding: ${({ theme }) => theme.spacing.getSpace('sm')};

	// Sizes
	max-width: 700px;

	// Border
	border-radius: ${({ theme }) => theme.border.getBorderRadius('sm')};

	// Effects
	box-shadow: ${({ theme }) => theme.effects.shadow.defaultCard};
`;

interface ContainerProps {
	children: React.ReactNode;
	colorKey: 'color1' | 'color2' | 'color3' | 'color4';
};

function Container(props: ContainerProps) {
	const themeMode = useRecoilValue(themeModeState);
	const theme = useRecoilValue(themeState);

	return (
		<StyledContainer
			theme={theme}
			themeMode={themeMode}
			colorKey={props.colorKey}
		>
			{props.children}
		</StyledContainer>
	);
}

export default Container;
