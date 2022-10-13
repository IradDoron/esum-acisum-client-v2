import { useRecoilValue, useSetRecoilState } from 'recoil';

// import  states
import { currModuleData } from './states';

export function GetListOfContentsTitles() {
	const currModuleDataState = useRecoilValue(currModuleData);
	const list: any[] = currModuleDataState?.chapters?.map((content: any) => {
		return content.title;
	});

	return list;
}

