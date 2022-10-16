import { useEffect } from 'react';

// imports from libraries
import axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';

// import states
import { allModules, currModuleData, currModuleIndex } from './states';

// import constants
import { URLs } from '../../../recoil/constants';

export const useFetchModules = () => {
	const setAllModules = useSetRecoilState(allModules);
	useEffect(() => {
		const url = URLs.prod + '/modules';

		(async () => {
			try {
				const response = await axios.get(url);
				setAllModules(response.data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, [setAllModules]);
};

export const useUpdateCurrModuleData = () => {
	const setCurrModuleData = useSetRecoilState(currModuleData);
	const currModuleIndexState = useRecoilValue(currModuleIndex);
	const allModulesState = useRecoilValue(allModules);

	useEffect(() => {
		setCurrModuleData(allModulesState[currModuleIndexState]);
	}, [allModulesState, currModuleIndexState, setCurrModuleData]);
};
