// import types
import { BasicThemeProps } from '../../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import states
import { themeModeState, themeState } from '../../../../recoil/theme';

// styled components
const StyledSubTitle = styled.p<BasicThemeProps>`
	// Colors
	color: ${({ theme, themeMode }) => theme.palette.modes[themeMode].bodyColor};

    // Spacing
    margin-bottom: ${({ theme }) => theme.spacing.getSpace('xs2')};
    margin-top: ${({ theme }) => theme.spacing.getSpace('sm')};


    // Typography
    font-weight: bold;
    font-family: ${({ theme }) => theme.typography.fontFamilies.body};
    letter-spacing: ${({ theme }) => theme.typography.getLetterSpacing('sm')};
    font-size: ${({ theme }) => theme.typography.getFontSize('md')};
`;

function SubTitle({ content }: any) {
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	return (
		<StyledSubTitle theme={theme} themeMode={themeMode}>
			{content}
		</StyledSubTitle>
	);
}

export default SubTitle;
