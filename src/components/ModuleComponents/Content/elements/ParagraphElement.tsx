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
	margin-bottom: ${({ theme }) => theme.spacing.getSpace('xs2')};
	font-size: ${({ theme }) => theme.typography.getFontSize('xs')};
	font-family: ${({ theme }) => theme.typography.fontFamilies.body};
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


