// import states
import { themeModeState, themeState } from '../../../recoil/theme';
import { allModules } from '../../ModulesPage/states';

// import libraries
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

// import components
import ChipsSearch from './ChipsSearch';
// import IdSearch from './IdSearch';
import StyledModulesSearchContainer from './StyledModulesSearchContainer';

// import effects
import useUpdateModuleData from './useUpdateModuleData';

function ModulesSearch() {
	// states
	const allModulesState = useRecoilValue(allModules);
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);

	const setModulesCount = useState<any>(null)[1];

	// effects

	useUpdateModuleData();

	useEffect(() => {
		if (allModulesState) {
			setModulesCount(allModulesState.length);
		}
	}, [allModulesState, setModulesCount]);



	return (
		<StyledModulesSearchContainer theme={theme} themeMode={themeMode}>
			{/* <IdSearch /> */} 
			<ChipsSearch />
		</StyledModulesSearchContainer>
	);
}

export default ModulesSearch;

// Notes:

// In the future, I will add a search by id, but for now, I will leave it commented out.