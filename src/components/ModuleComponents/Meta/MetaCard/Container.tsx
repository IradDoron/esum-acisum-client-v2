// import types
import { ThemePropsWithColorKey } from '../../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import states
import { themeModeState, themeState } from '../../../../recoil/theme';

const StyledContainer = styled.div<ThemePropsWithColorKey>`
	max-width: 700px;
	margin: auto;
	margin-top: ${({ theme }) => theme.spacing.getSpace('md')};
	margin-bottom: ${({ theme }) => theme.spacing.getSpace('md')};
	padding: ${({ theme }) => theme.spacing.getSpace('sm')};
	border-color: ${({theme, themeMode, colorKey}) => theme.palette.modes[themeMode][colorKey].main.value};
	border-width: 6px;
	border-style: solid;
	border-radius: 32px;
`;

type ContainerProps = {
	children: React.ReactNode; 
	colorKey: 'color1' | 'color2' | 'color3' | 'color4';
};

function Container(props: ContainerProps) {
	const themeMode = useRecoilValue(themeModeState);
	const theme = useRecoilValue(themeState);

	return (
		<StyledContainer theme={theme} themeMode={themeMode} colorKey={props.colorKey}>
			{props.children}
		</StyledContainer>
	);
}

export default Container;
