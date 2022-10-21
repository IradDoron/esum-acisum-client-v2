import { atom } from 'recoil';

export const allModules = atom({
	key: 'allModules',
	default: [],
});

export const currModuleData = atom({
	key: 'currModuleData',
	default: {} as any,
});

export const currModuleIndex = atom({
	key: 'currModuleIndex',
	default: 1,
});

export const currModuleId = atom({
	key: 'currModuleId',
	default: 1,
});

export const currModuleIdInput = atom({
	key: 'currModuleInput',
	default: '',
});

export const currModuleIndexInput = atom({
	key: 'currModuleIndexInput',
	default: 1,
});

export const testImage = atom({
	key: 'testImage',
	default: null,
});

//const [allModules, setAllModules] = useState<any>([]);

//const [currModuleData, setCurrModuleData] = useState<any>(null);

// const [currModuleIndex, setCurrModuleIndex] = useState(1);
// const [currModuleIndexInput, setCurrModuleIndexInput] = useState(1);
// const [testImage, setTestImage] = useState<any>(null);
