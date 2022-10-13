// import states
import { themeModeState, themeState } from '../../../../recoil/theme';

// import libraries
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import types
import { BasicThemeProps } from '../../../../types/styledComponentsInterfaces';

const StyledTitle = styled.h1<BasicThemeProps>`
	// constant values
	border-bottom-width: 6px;
	border-bottom-style: solid;
	border-bottom-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color1.main.value};
	width: fit-content;
	margin: auto;
	text-align: center;
	margin-bottom: ${({ theme }) => theme.spacing.getSpace('md')};

	// responsive values
	${({ theme }) => theme.breakpoints.down('sm')} {
		font-size: ${({ theme }) => theme.typography.getFontSize('xl')};
	}

	${({ theme }) => theme.breakpoints.between('sm', 'md')} {
		font-size: ${({ theme }) => theme.typography.getFontSize('xl2')};
	}

	${({ theme }) => theme.breakpoints.between('md', 'lg')} {
		font-size: ${({ theme }) => theme.typography.getFontSize('xl3')};
	}

	${({ theme }) => theme.breakpoints.between('lg', 'xl')} {
		font-size: ${({ theme }) => theme.typography.getFontSize('xl4')};
	}

	${({ theme }) => theme.breakpoints.up('xl')} {
		font-size: ${({ theme }) => theme.typography.getFontSize('xl5')};
	}
`;

function Title({ title }: any) {
	const themeMode = useRecoilValue(themeModeState);
	const theme = useRecoilValue(themeState);
	console.log(theme, themeMode);
	return (
		<StyledTitle theme={theme} themeMode={themeMode}>
			{title}
		</StyledTitle>
	);
}

export default Title;
