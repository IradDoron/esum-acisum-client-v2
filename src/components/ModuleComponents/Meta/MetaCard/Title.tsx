// import types
import { BasicThemeProps } from '../../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import states
import { themeModeState, themeState } from '../../../../recoil/theme';

const StyledTitle = styled.h2<BasicThemeProps>`
	margin: auto;
	width: fit-content;
	font-weight: normal;
	font-size: ${({ theme }) => theme.typography.getFontSize('md')};
`;

function Title({ children }: any) {
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	return (
		<StyledTitle theme={theme} themeMode={themeMode}>
			{children}
		</StyledTitle>
	);
}

export default Title;
