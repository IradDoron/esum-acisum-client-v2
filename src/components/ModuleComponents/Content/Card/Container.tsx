// import types
import { BasicThemeProps } from '../../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import states
import { themeModeState, themeState } from '../../../../recoil/theme';

// styled components
const StyledContainer = styled.section<BasicThemeProps>`
	// Colors
	border-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color1.main.value};

	background-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].cardBg};

	// Spacing
	margin-bottom: ${({ theme }) => theme.spacing.getSpace('xl')};

	

	${({ theme }) => theme.breakpoints.up('md')} {
		margin-right: auto;
		margin-left: auto;
	}

	// Sizing
	border-width: 6px;
	max-width: 940px;
	min-height: 200px;

	// Border
	border: none;
	border-radius: ${({ theme }) => theme.border.getBorderRadius('sm')};

	// Effects
	box-shadow: ${({ theme }) => theme.effects.shadow.defaultCard};
`;

type ContainerProps = {
	children: React.ReactNode;
};

function Container(props: ContainerProps) {
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	return (
		<StyledContainer theme={theme} themeMode={themeMode}>
			{props.children}
		</StyledContainer>
	);
}

export default Container;
