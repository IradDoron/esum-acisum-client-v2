// import types
import { BasicThemeProps } from '../../../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import states
import { themeModeState, themeState } from '../../../../../recoil/theme';

// styled components
const StyledTitle = styled.h2<BasicThemeProps>`
width:fit-content;
margin: auto;
	color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color1.main.contrast};

        font-size: ${({theme}) => theme.typography.getFontSize('xl')};
`;

// types
type TitleProps = {
	title: string;
};

function Title(props: TitleProps) {
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	return (
		<StyledTitle theme={theme} themeMode={themeMode}>
			{props.title}
		</StyledTitle>
	);
}

export default Title;
