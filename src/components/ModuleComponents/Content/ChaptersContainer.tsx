// import types
import { BasicThemeProps } from '../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import states
import { themeModeState, themeState } from '../../../recoil/theme';

// styled components
const StyledChaptersContainer = styled.div<BasicThemeProps>`
	// Spacing
	margin-top: ${({ theme }) => theme.spacing.getSpace('xl4')};
`;

// types
type ChaptersContainerProps = {
	children: React.ReactNode | any;
};

function ChaptersContainer(props: ChaptersContainerProps) {
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	return (
		<StyledChaptersContainer theme={theme} themeMode={themeMode}>
			{props.children}
		</StyledChaptersContainer>
	);
}

export default ChaptersContainer;
