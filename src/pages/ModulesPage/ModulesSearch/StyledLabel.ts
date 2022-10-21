// import libraries
import styled from 'styled-components';

// import types
import { BasicThemeProps } from '../../../types/styledComponentsInterfaces';

const StyledLabel = styled.label<BasicThemeProps>`
	// Typography
	font-size: ${({ theme }) => theme.typography.getFontSize('xl2')};
	font-family: ${({ theme }) => theme.typography.fontFamilies.body};
	font-weight: bold;

	${({ theme }) => theme.breakpoints.down('sm')} {
		font-size: ${({ theme }) => theme.typography.getFontSize('md')};
	}

    // Layout
    text-align: center;

	// Sizes
	${({ theme }) => theme.breakpoints.down('sm')} {
		//max-width: 100px;
	}
`;

export default StyledLabel;
