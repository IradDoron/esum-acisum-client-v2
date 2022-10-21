// import types
import { BasicThemeProps } from '../../../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import states
import { themeModeState, themeState } from '../../../../../recoil/theme';

// styled components
const StyledHeader = styled.h2<BasicThemeProps>`
	// Colors
	background-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color3.main.value};
	color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color3.main.contrast};

	// Spacing
	padding: ${({ theme }) => theme.spacing.getSpace('xs2')};

	// Layout
	text-align: center;

    // Border
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;


    // Typography
    font-family: ${({ theme }) => theme.typography.fontFamilies.body};
    font-size: ${({ theme }) => theme.typography.getFontSize('xl2')};
    font-weight: bold;
    letter-spacing: ${({ theme }) => theme.typography.getLetterSpacing('lg')};
`;

function Header() {
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	return (
		<StyledHeader theme={theme} themeMode={themeMode}>
			בוחן
		</StyledHeader>
	);
}

export default Header;
