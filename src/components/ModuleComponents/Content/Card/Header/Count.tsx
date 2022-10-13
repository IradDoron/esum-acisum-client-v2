// import types
import { BasicThemeProps } from '../../../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import states
import { themeModeState, themeState } from '../../../../../recoil/theme';

// styled components
const StyledCount = styled.div<BasicThemeProps>`
	color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color2.main.value};
	font-size: ${({ theme }) => theme.typography.getFontSize('lg')};
	font-weight: bold;
	border-width: 4px;
	border-style: solid;
	width: fit-content;
	min-width: 40px;
	min-height: 40px;
	border-radius: 50%;
	border-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color2.main.value};
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	right: 0;
`;

// types
type CountProps = {
	count: number | any;
};

function Count(props: CountProps) {
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	return (
		<StyledCount theme={theme} themeMode={themeMode}>
			{props.count}
		</StyledCount>
	);
}

export default Count;
