import styled from 'styled-components';

// import types
import { BasicThemeProps } from '../../../../types/styledComponentsInterfaces';

const StyledChipsSearchContainer = styled.div<BasicThemeProps>`
	// Colors
	border-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color2.main.value};
	background-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color2.light.value};

	// Spacing
	padding-top: ${({ theme }) => theme.spacing.getSpace('xl')};
	padding-bottom: ${({ theme }) => theme.spacing.getSpace('xl')};
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
	border-width: 4px;
	height: 100%;
`;

export default StyledChipsSearchContainer;
