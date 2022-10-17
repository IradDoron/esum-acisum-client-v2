// import libraries
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

// import states
import { allModules, currModuleData, currModuleId } from '../states';

function useUpdateModuleData() {
	// states
	const allModulesState = useRecoilValue(allModules);
	const setCurrModuleDataState = useSetRecoilState(currModuleData);
	const currModuleIdState = useRecoilValue(currModuleId);

	useEffect(() => {
		if (currModuleIdState) {
			const moduleData = allModulesState.find(
				(module: any) => module.id === Number(currModuleIdState)
			);
			setCurrModuleDataState(moduleData);
		}
	}, [allModulesState, currModuleIdState, setCurrModuleDataState]);
}

export default useUpdateModuleData;
