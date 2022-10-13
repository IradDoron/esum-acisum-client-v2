// import types
import { BasicThemeProps } from '../../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import states
import { themeModeState, themeState } from '../../../../recoil/theme';

const StyledContent = styled.div<BasicThemeProps>`
	border: solid blue;
`;

function Content() {
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	return <StyledContent theme={theme} themeMode={themeMode}></StyledContent>;
}

export default Content;
