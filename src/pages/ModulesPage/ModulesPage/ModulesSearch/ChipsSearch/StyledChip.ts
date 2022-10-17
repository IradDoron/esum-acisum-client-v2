// import libraries
import styled from 'styled-components';

interface ChipProps {
	onClick: (event: any) => void;
	theme: any;
	themeMode: any;
}

const StyledChip = styled.div<ChipProps>`
width: fit-content;
text-align: center;
padding: ${({ theme }) => theme.spacing.getSpace('xs2')};
border-radius: 50px;
background-color: ${({ theme, themeMode }) =>
    theme.palette.modes[themeMode].color2.main.value};
color: ${({ theme, themeMode }) =>
    theme.palette.modes[themeMode].color2.main.contrast};
cursor: pointer;

// responsive styles
${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: ${({ theme }) => theme.typography.getFontSize('xs2')};
    margin: ${({ theme }) => theme.spacing.getSpace('xs2')};
}
`;

export default StyledChip;