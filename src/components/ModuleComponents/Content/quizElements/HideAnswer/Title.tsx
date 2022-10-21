// import types
import { BasicThemeProps } from '../../../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import states
import { themeModeState, themeState } from '../../../../../recoil/theme';

// styled components
const StyledTitle = styled.p<BasicThemeProps>`
	// Typography
	font-size: ${({ theme }) => theme.typography.getFontSize('lg')};
	font-family: ${({ theme }) => theme.typography.fontFamilies.body};

	// Spacing
	margin: ${({ theme }) => theme.spacing.getSpace('xs2')};
	margin-right: 0;
	margin-left: 0;
`;

function Title({ count }: any) {
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	return (
		<StyledTitle theme={theme} themeMode={themeMode}>
			{`שאלה ${count}`}
		</StyledTitle>
	);
}

export default Title;

// Component info:

/*

The prop "children" it is the text of the question, that rendered inside the Paragraph component.

*/
