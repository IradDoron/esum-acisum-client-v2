// import states
import { themeModeState, themeState } from '../../../../recoil/theme';

// import libraries
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import types
import { BasicThemeProps } from '../../../../types/styledComponentsInterfaces';

const StyledDescription = styled.h2<BasicThemeProps>`
	margin: auto;
	width: fit-content;
	text-align: center;
	font-size: ${({ theme }) => theme.typography.getFontSize('sm')};
	font-weight: normal;
	margin-bottom: ${({ theme }) => theme.spacing.getSpace('md')};

`;

function Description({ description }: any) {
	const themeMode = useRecoilValue(themeModeState);
	const theme = useRecoilValue(themeState);
	return (
		<StyledDescription theme={theme} themeMode={themeMode}>
			{description}
		</StyledDescription>
	);
}

export default Description;
