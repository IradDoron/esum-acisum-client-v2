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
