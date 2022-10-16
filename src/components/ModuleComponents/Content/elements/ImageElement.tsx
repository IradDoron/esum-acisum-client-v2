// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import constants
import { CURR_ENV_URL } from '../../../../recoil/constants';

// import types
import { BasicThemeProps } from '../../../../types/styledComponentsInterfaces';

// import states
import { themeModeState, themeState } from '../../../../recoil/theme';

// types
interface Props {
	content: string[];
}

const StyledImageContainer = styled.div<BasicThemeProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: ${({ theme }) => theme.spacing.getSpace('xs2')};
	margin-top: ${({ theme }) => theme.spacing.getSpace('xs2')};

`;

const StyledImage = styled.img<BasicThemeProps>`
	max-width: 100%;
`;

function Image(props: Props) {
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	const { content } = props;
	return (
		<StyledImageContainer theme={theme} themeMode={themeMode}>
			<StyledImage
				theme={theme}
				themeMode={themeMode}
				src={`${CURR_ENV_URL}/${content}`}
				alt="failed to load"
			/>
		</StyledImageContainer>
	);
}

export default Image;
