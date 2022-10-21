// import libraries
import styled from 'styled-components';

interface ButtonProps {
	onClick: (event: any) => void;
	theme: any;
	themeMode: any;
}

const StyledButton = styled.button<ButtonProps>`
	// Colors
	background-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color3.main.value};
	color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color3.main.contrast};

	// Typography
	font-size: ${({ theme }) => theme.typography.getFontSize('lg')};

	${({ theme }) => theme.breakpoints.down('sm')} {
		font-size: ${({ theme }) => theme.typography.getFontSize('xs')};
	}

	// Sizes
	height: 62px;

	// Spacing
	padding: ${({ theme }) => theme.spacing.getSpace('xs2')};

	// Border
	border: none;
	border-radius: 4px;

	// Other
	cursor: pointer;
`;

export default StyledButton;
