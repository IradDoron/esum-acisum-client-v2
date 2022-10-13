// import types
import { BasicThemeProps } from '../../../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import states
import { themeModeState, themeState } from '../../../../../recoil/theme';

// styled components
const StyledDescription = styled.h3<BasicThemeProps>`
	width: fit-content;
	margin: auto;
    font-weight: normal;
    font-size: ${({theme}) => theme.typography.getFontSize('sm')};
	color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color1.main.contrast};
	
`;

// types
type DescriptionProps = {
	description: string;
};

function Description(props: DescriptionProps) {
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	return (
		<StyledDescription theme={theme} themeMode={themeMode}>
			{props.description}
		</StyledDescription>
	);
}

export default Description;
