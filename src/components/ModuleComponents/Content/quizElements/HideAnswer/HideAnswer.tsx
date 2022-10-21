// import types
import { BasicThemeProps } from '../../../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import states
import { themeModeState, themeState } from '../../../../../recoil/theme';

// import components
import Answer from './Answer';
import Question from './Question';
import Title from './Title';

// styled components
const StyledHideAnswer = styled.div<BasicThemeProps>``;

const StyledQuestionBlock = styled.div<BasicThemeProps>``;

const StyledHorizontalLine = styled.hr<BasicThemeProps>`
	// Colors
	background-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].quizBg};

border: none;
height: 1px;

		
`;

function HideAnswer(props: any) {
	const { questions } = props;
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	return (
		<StyledHideAnswer theme={theme} themeMode={themeMode}>
			{questions.map((question: any, index: number) => {
				const { question: questionText, answer: answerText } = question;
				return (
					<StyledQuestionBlock theme={theme} themeMode={themeMode} key={index}>
						<Title count={index + 1} />
						<Question>{questionText}</Question>
						<Answer>{answerText}</Answer>
						<StyledHorizontalLine theme={theme} themeMode={themeMode} />
					</StyledQuestionBlock>
				);
			})}
		</StyledHideAnswer>
	);
}

export default HideAnswer;
