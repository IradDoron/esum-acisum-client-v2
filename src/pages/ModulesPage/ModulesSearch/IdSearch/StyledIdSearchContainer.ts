import styled from 'styled-components';

// import types
import { BasicThemeProps } from '../../../../../types/styledComponentsInterfaces';

const StyledIdSearchContainer = styled.div<BasicThemeProps>`
	// Colors
	border-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color3.main.value};
	background-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color3.light.value};

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
	justify-content: center;
	align-items: center;

	${({ theme }) => theme.breakpoints.down('md')} {
		gap: 12px;
		justify-content: space-around;
	}

	// Sizes
	max-width: 1000px;
	border-width: 4px;
`;

export default StyledIdSearchContainer;
