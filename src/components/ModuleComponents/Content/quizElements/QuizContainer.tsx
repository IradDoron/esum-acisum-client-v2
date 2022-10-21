// import types
import { BasicThemeProps } from '../../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import states
import { themeModeState, themeState } from '../../../../recoil/theme';

// import components
import Body from './Body';
import Header from './Header';
import HideAnswer from './HideAnswer';

// styled components
const StyledQuizContainer = styled.div<BasicThemeProps>`
	// Colors
	background-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].quizBg};

	// Spacing
	margin: ${({ theme }) => theme.spacing.getSpace('xs2')};
	margin-top: ${({ theme }) => theme.spacing.getSpace('sm')};
	margin-bottom: ${({ theme }) => theme.spacing.getSpace('sm')};

	// Border
	border-radius: ${({ theme }) => theme.border.getBorderRadius('sm')};

	// Effects
	box-shadow: ${({ theme }) => theme.effects.shadow.defaultCard};
`;

function QuizContainer({ quizSections }: any) {
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	return (
		<StyledQuizContainer theme={theme} themeMode={themeMode}>
			<Header />
			<Body>
				{quizSections.map((section: any, index: number) => {
					const { quizType, questions } = section;
					switch (quizType) {
						case 'hideAnswer': {
							return <HideAnswer questions={questions} />;
						}
						default: {
							return <h1>Undefined quiz. Irad, fix it now!</h1>;
						}
					}
				})}
			</Body>
		</StyledQuizContainer>
	);
}

export default QuizContainer;
