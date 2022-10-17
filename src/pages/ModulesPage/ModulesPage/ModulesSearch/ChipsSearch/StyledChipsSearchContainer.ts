import styled from 'styled-components';

// import types
import { BasicThemeProps } from '../../../../../types/styledComponentsInterfaces';

const StyledIdSearchContainer = styled.div<BasicThemeProps>`
	// Colors
	border-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color2.main.value};
	background-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color2.light.value};

	// Border & Outline
	border-style: solid;
	border-radius: 6px;

	// Spacing
	margin: auto;
	padding-top: ${({ theme }) => theme.spacing.getSpace('sm')};
	padding-bottom: ${({ theme }) => theme.spacing.getSpace('sm')};
	margin-bottom: ${({ theme }) => theme.spacing.getSpace('md')};
	gap: ${({ theme }) => theme.spacing.getSpace('sm')};

	${({ theme }) => theme.breakpoints.down('sm')} {
		gap: 10px;
	}

	// Layout
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	// Sizes
	max-width: 1000px;
	border-width: 4px;
`;

export default StyledIdSearchContainer;
