// import libraries
import styled from 'styled-components';

interface ChipProps {
	onClick: (event: any) => void;
	theme: any;
	themeMode: any;
}

const StyledChip = styled.div<ChipProps>`

// Typography
font-family: ${({ theme }) => theme.typography.fontFamilies.body};
letter-spacing: ${({ theme }) => theme.typography.getLetterSpacing('md')};
${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: ${({ theme }) => theme.typography.getFontSize('xs2')};
}

// Sizes
width: fit-content;

// Layout
text-align: center;

// Spacing
padding: ${({ theme }) => theme.spacing.getSpace('xs2')};
${({ theme }) => theme.breakpoints.down('sm')} {
    margin: ${({ theme }) => theme.spacing.getSpace('xs2')};
}

// Border
border-radius: 50px;

// Colors
background-color: ${({ theme, themeMode }) =>
    theme.palette.modes[themeMode].color2.main.value};
color: ${({ theme, themeMode }) =>
    theme.palette.modes[themeMode].color2.main.contrast};

// Other
cursor: pointer;

`;

export default StyledChip;