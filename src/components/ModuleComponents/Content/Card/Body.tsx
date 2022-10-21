// import types
import { BasicThemeProps } from '../../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import states
import { themeModeState, themeState } from '../../../../recoil/theme';

const StyledBody = styled.section<BasicThemeProps>`
	padding: ${({ theme }) => theme.spacing.getSpace('md')};
	${({ theme }) => theme.breakpoints.down('sm')} {
		padding: ${({ theme }) => theme.spacing.getSpace('xs2')};
	}

	/* background: linear-gradient(
		318deg,
		${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].cardBg} 0%,
		${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color2.main.value}8 100%
	); */
`;

type BodyProps = {
	children: React.ReactNode | any;
};

function Body(props: BodyProps) {
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	return (
		<StyledBody theme={theme} themeMode={themeMode}>
			{props.children}
		</StyledBody>
	);
}

export default Body;
