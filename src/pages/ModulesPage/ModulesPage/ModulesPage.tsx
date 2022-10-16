// imports components
import ModuleComponents from '../../../components/ModuleComponents';
import ModulesSearch from './ModulesSearch';

// import types
import { BasicThemeProps } from '../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import helpers
import { GetListOfContentsTitles } from './helpers';

// import effects
import { useFetchModules, useUpdateCurrModuleData } from './effects';

// import states
import { currModuleData } from './states';

import { themeModeState, themeState } from '../../../recoil/theme';

// styled components
const StyledPageWrapper = styled.div<BasicThemeProps>`
	background-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color1.light.value};

	height: 100%;
	width: 100%;
`;

const { Meta, Content } = ModuleComponents;

function ModulesPage() {
	// states
	const currModuleDataState = useRecoilValue(currModuleData);

	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);

	// effects
	useFetchModules();
	useUpdateCurrModuleData();

	return (
		<>
			<StyledPageWrapper theme={theme} themeMode={themeMode}>
				<ModulesSearch />

				{currModuleDataState && (
					<>
						<Meta.Title title={currModuleDataState?.meta?.title} />
						<Meta.Description
							description={currModuleDataState?.meta?.description}
						/>
						<Meta.Prerequisites
							prerequisites={currModuleDataState?.meta?.prerequisites}
						/>
						<Meta.Goals goals={currModuleDataState?.meta?.goals} />

						<Meta.TableOfContents
							tableOfContents={() => GetListOfContentsTitles()}
						/>

						<Content.ChaptersContainer>
							{currModuleDataState?.chapters?.map(
								(content: any, index: number) => {
									return (
										<>
											<Content.Card.Container key={index}>
												<Content.Card.Header
													title={content?.title}
													description={content?.description}
													count={Number(index) + 1}
												/>
												<Content.Card.Body>
													{content.elements.map(
														(element: any, index: number) => {
															return (
																<Content.Element
																	type={element.type}
																	content={element.content}
																	children={element.children}
																	tonic={element.tonic}
																	scaleType={element.scaleType}
																	key={index}
																	title={element.title}
																></Content.Element>
															);
														}
													)}
												</Content.Card.Body>
											</Content.Card.Container>
										</>
									);
								}
							)}
						</Content.ChaptersContainer>
						<Meta.NextModules
							nextModules={currModuleDataState?.meta?.nextModules}
						/>
					</>
				)}
			</StyledPageWrapper>
		</>
	);
}

export default ModulesPage;
