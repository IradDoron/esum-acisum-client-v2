// import types
import { BasicThemeProps } from '../../../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import states
import { themeModeState, themeState } from '../../../../../recoil/theme';

// styled components
const StyledCount = styled.div<BasicThemeProps>`
	// Colors
	color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color2.light.contrast};

	text-decoration-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color2.main.value};

	// Typography
	font-size: ${({ theme }) => theme.typography.getFontSize('sm')};
	font-weight: bold;
	letter-spacing: 2px;
	font-family: ${({ theme }) => theme.typography.fontFamilies.primary};

	// Sizes
	width: fit-content;
	min-width: 40px;
	min-height: 40px;

	// Layout
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	right: 0;

	// Spacing
	margin-top: -${({ theme }) => theme.spacing.getSpace('xs3')};
`;

// types
type CountProps = {
	count: number | any;
};

function Count(props: CountProps) {
	const { count } = props;
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	return (
		<StyledCount theme={theme} themeMode={themeMode}>
			{`פרק ${count}`}
		</StyledCount>
	);
}

export default Count;
