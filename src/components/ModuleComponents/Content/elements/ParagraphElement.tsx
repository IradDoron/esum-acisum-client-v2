// import types
import { BasicThemeProps } from '../../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import states
import { themeModeState, themeState } from '../../../../recoil/theme';

// styled components
const StyledParagraph = styled.p<BasicThemeProps>`
	// Colors
	color: ${({ theme, themeMode }) => theme.palette.modes[themeMode].bodyColor};

	// Typography
	font-family: ${({ theme }) => theme.typography.fontFamilies.body};
	font-weight: normal;
	font-size: ${({ theme }) => theme.typography.getFontSize('xs')};
	line-height: 20px;
	${({ theme }) => theme.breakpoints.down('sm')} {
		font-size: ${({ theme }) => theme.typography.getFontSize('xs')};
	}
	${({ theme }) => theme.breakpoints.between('sm', 'md')} {
		font-size: ${({ theme }) => theme.typography.getFontSize('xs')};
	}

	${({ theme }) => theme.breakpoints.up('lg')} {
		font-size: ${({ theme }) => theme.typography.getFontSize('xs')};
	}

	// Spacing
	margin-bottom: ${({ theme }) => theme.spacing.getSpace('xs2')};
`;

function Paragraph({ content }: any) {
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	return (
		<StyledParagraph theme={theme} themeMode={themeMode}>
			{content}
		</StyledParagraph>
	);
}

export default Paragraph;
