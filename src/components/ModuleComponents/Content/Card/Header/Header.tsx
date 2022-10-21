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
	// Colors
	border-bottom-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color2.main.value};

	background-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color2.light.value};

	// Sizes
	border-bottom-width: 8px;
	min-height: 80px;
	height: fit-content;

	// Layout
	text-align: center;
	padding: ${({ theme }) => theme.spacing.getSpace('xs3')};
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	position: relative;

	// Border
	border-top-right-radius: ${({ theme }) => theme.border.getBorderRadius('sm')};
	border-top-left-radius: ${({ theme }) => theme.border.getBorderRadius('sm')};
	border-bottom-style: solid;
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
