// import types
import { BasicThemeProps } from '../../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import states
import { themeModeState, themeState } from '../../../../recoil/theme';

// import components
import Description from './Description';
import Title from './Title';

// styled components
const StyledHeader = styled.header<BasicThemeProps>`
	height: 80px;
	border-bottom-width: 10px;
	border-bottom-style: solid;
	border-radius: 20px 20px 0 0;
	border-bottom-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color2.main.value};
	background-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color1.main.value};

	
`;

// types
type HeaderProps = {
	title: string | any;
	description: string | any;
};

function Header(props: HeaderProps) {
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	return (
		<StyledHeader theme={theme} themeMode={themeMode}>
			<Title title={props.title} />
			<Description description={props.description} />
		</StyledHeader>
	);
}

export default Header;
