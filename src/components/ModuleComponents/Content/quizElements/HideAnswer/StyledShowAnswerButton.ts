// import types
import { BasicThemeProps } from '../../../../../types/styledComponentsInterfaces';

// import libraries
import styled from 'styled-components';

const StyledShowAnswerButton = styled.button<BasicThemeProps>`
	// Typography
	font-family: ${({ theme }) => theme.typography.fontFamilies.body};
	font-size: ${({ theme }) => theme.typography.getFontSize('xs')};

	// Colors
    background-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].quizBg};
	border-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color3.main.value};
	color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color3.main.value};

	// Spacing
	padding: ${({ theme }) => theme.spacing.getSpace('xs3')};
    margin-bottom: ${({ theme }) => theme.spacing.getSpace('xs2')};

	// Border

	border-radius: ${({ theme }) => theme.border.getBorderRadius('pill')};
	border-style: solid;
	border-width: ${({ theme }) => theme.border.getBorderWidth('medium')};

	// Other
	cursor: pointer;
`;

export default StyledShowAnswerButton;
