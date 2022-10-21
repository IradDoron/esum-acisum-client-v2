// import libraries
import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

// import states
import { themeModeState, themeState } from '../../../../recoil/theme';
import { allModules, currModuleId, currModuleIdInput } from '../../../ModulesPage/states';

// import components
import StyledLabel from '../StyledLabel';
import StyledChip from './StyledChip';
import StyledChipsContainer from './StyledChipsContainer';
import StyledChipsSearchContainer from './StyledChipsSearchContainer';

// import helpers
import scrollToTop from '../../../../helpers/scrollToTop';

function ChipsSearch() {
	// states
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	const allModulesState = useRecoilValue(allModules);
	const setCurrModuleIdState = useSetRecoilState(currModuleId);
	const setCurrModuleIdInputState = useSetRecoilState<any>(currModuleIdInput);
	const [allModulesTitles, setAllModulesTitles] = useState<any>([]);

	// helpers
	const getModuleIdFromTitle = (title: string) => {
		const module = allModulesState.find(
			(module: any) => module.meta.title === title
		) as any;
		return module.id;
	};

	// events handlers
	const handleClickChip = (title: any): void => {
		const moduleId = getModuleIdFromTitle(title);
		setCurrModuleIdState(moduleId);
		setCurrModuleIdInputState(moduleId);
		scrollToTop();
	};

	// effects
	useEffect(() => {
		if (allModulesState) {
			const titles = allModulesState.map((module: any) => module.meta.title);
			setAllModulesTitles(titles);
		}
	}, [allModulesState, setAllModulesTitles]);

	return (
		<StyledChipsSearchContainer theme={theme} themeMode={themeMode}>
			<StyledLabel theme={theme} themeMode={themeMode}>
				בחרו את המודול שאתם מחפשים
			</StyledLabel>

			<StyledChipsContainer theme={theme} themeMode={themeMode}>
				{allModulesTitles &&
					allModulesTitles.map((title: any) => {
						return (
							<StyledChip
								theme={theme}
								themeMode={themeMode}
								onClick={() => handleClickChip(title)}
							>
								{title}
							</StyledChip>
						);
					})}
			</StyledChipsContainer>
		</StyledChipsSearchContainer>
	);
}

export default ChipsSearch;
