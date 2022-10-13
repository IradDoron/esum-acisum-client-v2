// import types
import { BasicThemeProps } from '../../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import states
import { themeModeState, themeState } from '../../../../recoil/theme';

const StyledMore = styled.button<BasicThemeProps>`
	margin: auto;
	width: fit-content;
	font-size: ${({ theme }) => theme.typography.getFontSize('md')};
`;

function More() {
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	return <StyledMore theme={theme} themeMode={themeMode}></StyledMore>;
}

export default More;