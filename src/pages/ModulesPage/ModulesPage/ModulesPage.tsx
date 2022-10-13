// imports components
import ModuleComponents from '../../../components/ModuleComponents';

// import libraries
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

// import helpers
import { GetListOfContentsTitles } from './helpers';

// import effects
import { useFetchModules, useUpdateCurrModuleData } from './effects';

// import states
import {
	currModuleData,
	currModuleIndex,
	currModuleIndexInput
} from './states';

const { Meta, Content } = ModuleComponents;

function ModulesPage() {
	// states
	const currModuleIndexInputState = useRecoilValue(currModuleIndexInput);
	const currModuleIndexState = useRecoilValue(currModuleIndex);
	const currModuleDataState = useRecoilValue(currModuleData);
	const setCurrModuleIndexState = useSetRecoilState(currModuleIndex);
	const setCurrModuleIndexInputState = useSetRecoilState(currModuleIndexInput);

	// effects
	useFetchModules();
	useUpdateCurrModuleData();

	// events handlers
	const handleModuleIndexChange = (event: any): void => {
		const { value } = event.target;
		setCurrModuleIndexInputState(Number(value));
	};

	const handleOpenModuleClick = (currInput: any, setter: any): void => {
		setter(currInput);
	};

	return (
		<>
			<h1>עמוד המודולים</h1>
			<input
				type="number"
				value={currModuleIndexInputState}
				onChange={(e) => handleModuleIndexChange(e)}
			/>
			<button
				onClick={() =>
					handleOpenModuleClick(
						currModuleIndexInputState,
						setCurrModuleIndexState
					)
				}
			>
				פתח מודול
			</button>
			<h1>אינדקס של המודול: {currModuleIndexState}</h1>

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
											<Content.Card.Header title={content?.title} description={content?.description} />
											<Content.ElementsBox>
												{content.elements.map((element: any, index: number) => {
													return (
														<Content.Element
															type={element.type}
															content={element.content}
															children={element.children}
															key={index}
														></Content.Element>
													);
												})}
											</Content.ElementsBox>
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
		</>
	);
}

export default ModulesPage;
