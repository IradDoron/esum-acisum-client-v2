import styled from 'styled-components';

// types and interfaces
interface InputProps {
	value: number;
	onChange: (event: any) => void;
	type: string;
	theme: any;
	themeMode: any;
}

// styled components
const StyledInput = styled.input<InputProps>`
	// Colors
	border-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color3.main.value};

	&:focus {
		border-color: ${({ theme, themeMode }) =>
			theme.palette.modes[themeMode].color2.main.value};
	}

	// Typography
	font-size: ${({ theme }) => theme.typography.getFontSize('md')};

	${({ theme }) => theme.breakpoints.down('sm')} {
		font-size: ${({ theme }) => theme.typography.getFontSize('xs')};
	}

	// Spacing
	padding-top: ${({ theme }) => theme.spacing.getSpace('xs2')};
	padding-bottom: ${({ theme }) => theme.spacing.getSpace('xs2')};
	margin-right: ${({ theme }) => theme.spacing.getSpace('md')};
	margin-left: ${({ theme }) => theme.spacing.getSpace('md')};

	${({ theme }) => theme.breakpoints.down('md')} {
		margin: 0;
		padding-left: ${({ theme }) => theme.spacing.getSpace('xs')};
		padding-right: ${({ theme }) => theme.spacing.getSpace('xs')};
	}

	// Border & Outline
	border-style: solid;
	border-width: 4px;
	border-radius: 4px;

	&:focus {
		outline: none;
	}

	// Sizes
	max-width: 136px;
	height: 62px;

	${({ theme }) => theme.breakpoints.down('sm')} {
	}

	// Layout
	text-align: center;
`;

export default StyledInput;
