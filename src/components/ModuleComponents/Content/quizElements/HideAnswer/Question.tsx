// import types
import { BasicThemeProps } from '../../../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import states
import { themeModeState, themeState } from '../../../../../recoil/theme';

// import components
import Paragraph from '../../elements/ParagraphElement';

// styled components
const StyledQuestion = styled.div<BasicThemeProps>``;

function Question({ children }: any) {
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	return (
		<StyledQuestion theme={theme} themeMode={themeMode}>
			<Paragraph content={children} />
		</StyledQuestion>
	);
}

export default Question;

// Component info:

/*

The prop "children" it is the text of the question, that rendered inside the Paragraph component.

*/
