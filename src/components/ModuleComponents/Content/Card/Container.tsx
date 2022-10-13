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
	margin: auto;
	margin-bottom: ${({ theme }) => theme.spacing.getSpace('xl')};
	max-width: 1000px;
	border-radius: 32px;
	border-width: 6px;
	border-style: solid;
	border-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color1.main.value};
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
