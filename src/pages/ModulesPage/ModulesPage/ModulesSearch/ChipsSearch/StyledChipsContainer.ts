// import libraries
import styled from 'styled-components';

// import types
import { BasicThemeProps } from '../../../../../types/styledComponentsInterfaces';

const StyledChipsContainer = styled.div<BasicThemeProps>`
	// Sizes
	width: 100%;

	// Layout
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
`;

export default StyledChipsContainer;
