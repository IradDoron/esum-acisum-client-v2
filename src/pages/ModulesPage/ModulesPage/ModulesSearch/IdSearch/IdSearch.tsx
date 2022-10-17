// import states
import { themeModeState, themeState } from '../../../../../recoil/theme';
import { currModuleId, currModuleIdInput } from '../../states';

// import libraries
import React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

// import conponents
import StyledLabel from '../StyledLabel';
import StyledButton from './StyledButton';
import StyledIdSearchContainer from './StyledIdSearchContainer';
import StyledInput from './StyledInput';

function IdSearch() {
	// states
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	const setCurrModuleIdState = useSetRecoilState(currModuleId);
	const [currModuleIdInputState, setCurrModuleIdInputState] =
		useRecoilState<any>(currModuleIdInput);

	// events handlers
	const handleModuleIdChange = (event: any): void => {
		const { value } = event.target;
		setCurrModuleIdInputState(Number(value));
	};

	const handleOpenModuleClick = (): void => {
		setCurrModuleIdState(Number(currModuleIdInputState));
	};

	const handleFocus = (event: any): void => {
		event.target.select();
	};

	return (
		<StyledIdSearchContainer theme={theme} themeMode={themeMode}>
			<StyledLabel theme={theme} themeMode={themeMode}>
				כתוב/כתבי את מספר המודול
			</StyledLabel>
			<StyledInput
				type="text"
				value={currModuleIdInputState}
				onChange={(e) => handleModuleIdChange(e)}
				theme={theme}
				themeMode={themeMode}
				onFocus={(e) => handleFocus(e)}
			/>
			<StyledButton
				onClick={handleOpenModuleClick}
				theme={theme}
				themeMode={themeMode}
			>
				פתח מודול
			</StyledButton>
		</StyledIdSearchContainer>
	);
}

export default IdSearch;
