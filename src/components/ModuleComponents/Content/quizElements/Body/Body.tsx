// import types
import { BasicThemeProps } from '../../../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import states
import { themeModeState, themeState } from '../../../../../recoil/theme';

// styled components
const StyledBody = styled.section<BasicThemeProps>`
	// Spacing
	padding: ${({ theme }) => theme.spacing.getSpace('xs2')};
`;

function Body({ children }: any) {
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	return (
		<StyledBody theme={theme} themeMode={themeMode}>
			{children}
		</StyledBody>
	);
}

export default Body;
