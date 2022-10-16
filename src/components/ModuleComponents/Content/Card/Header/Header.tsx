// import types
import { BasicThemeProps } from '../../../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import states
import { themeModeState, themeState } from '../../../../../recoil/theme';

// import components
import Count from './Count';
import Description from './Description';
import Title from './Title';

// styled components
const StyledHeader = styled.header<BasicThemeProps>`
	height: fit-content;
	text-align: center;
	min-height: 80px;
	border-bottom-width: 10px;
	border-bottom-style: solid;
	border-radius: 20px 20px 0 0;
	padding: ${({ theme }) => theme.spacing.getSpace('xs3')};

	border-bottom-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color2.main.value};
	background-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color1.main.value};

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	position: relative;

`;

// types
type HeaderProps = {
	title: string | any;
	description: string | any;
	count: number | any;
};

function Header(props: HeaderProps) {
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	return (
		<StyledHeader theme={theme} themeMode={themeMode}>
			<Title title={props.title} />
			<Description description={props.description} />
			<Count count={props.count} />
		</StyledHeader>
	);
}

export default Header;
