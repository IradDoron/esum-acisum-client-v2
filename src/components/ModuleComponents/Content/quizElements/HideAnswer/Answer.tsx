// import libraries
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

// import states
import { themeModeState, themeState } from '../../../../../recoil/theme';

// import components
import Paragraph from '../../elements/ParagraphElement';

// import styled components
import StyledShowAnswerButton from './StyledShowAnswerButton';
import StyledAnswer from './StyledAnswer';

function Answer({ children }: any) {
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	const [isAnswerVisible, setIsAnswerVisible] = useState(false);

	return (
		<StyledAnswer theme={theme} themeMode={themeMode}>
			<StyledShowAnswerButton
				theme={theme}
				themeMode={themeMode}
				onClick={() => setIsAnswerVisible(!isAnswerVisible)}
			>
				{isAnswerVisible ? 'הסתר תשובה' : 'הצג תשובה'}
			</StyledShowAnswerButton>
			{isAnswerVisible ? <Paragraph content={children} /> : null}
		</StyledAnswer>
	);
}

export default Answer;

// Component info:

/*

The prop "children" it is the text of the answer, that rendered inside the Paragraph component.

*/
