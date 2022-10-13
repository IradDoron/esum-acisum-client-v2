import { atom } from 'recoil';

import theme from '../../styleSystem/theme';

export const themeState = atom({
	key: 'themeState',
	default: theme,
});

export const themeModeState = atom({
	key: 'themeModeState',
	default: 'light',
});
