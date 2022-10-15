// import types
import { BasicThemeProps } from '../../../../types/styledComponentsInterfaces';

// import states
import { themeModeState, themeState } from '../../../../recoil/theme';
import {
	allModules,
	currModuleId,
	currModuleIdInput,
	currModuleIndex,
	currModuleIndexInput,
	currModuleData,
} from '../states';

// import libraries
import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

// styled components
const StyledInput = styled.input<InputProps>`
	height: 30px;
	width: 150px;
	font-size: ${({ theme }) => theme.typography.getFontSize('md')};
	text-align: center;
	padding: ${({ theme }) => theme.spacing.getSpace('md')};
`;

const StyledButton = styled.button<ButtonProps>`
	background-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color1.main.value};
	color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color1.main.contrast};
	padding: ${({ theme }) => theme.spacing.getSpace('sm')};
	font-size: ${({ theme }) => theme.typography.getFontSize('md')};
	cursor: pointer;
	border: none;
`;

const StyledChipsContainer = styled.div<BasicThemeProps>`
	display: flex;
`;

const StyledChip = styled.div<ChipProps>`
	width: fit-content;
	padding: ${({ theme }) => theme.spacing.getSpace('xs2')};
	margin: ${({ theme }) => theme.spacing.getSpace('xs')};
	border-radius: 50px;
	background-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color2.main.value};
	color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color2.main.contrast};
	cursor: pointer;
`;

// types and interfaces
interface InputProps {
	value: number;
	onChange: (event: any) => void;
	type: string;
	theme: any;
	themeMode: any;
}

interface ButtonProps {
	onClick: (event: any) => void;
	theme: any;
	themeMode: any;
}

interface ChipProps {
	onClick: (event: any) => void;
	theme: any;
	themeMode: any;
}

function ModulesSearch() {
	// states
	const currModuleIndexInputState = useRecoilValue(currModuleIndexInput);
	const currModuleIndexState = useRecoilValue(currModuleIndex);
	const [currModuleIdState, setCurrModuleIdState] =
		useRecoilState(currModuleId);
	const [currModuleIdInputState, setCurrModuleIdInputState] =
		useRecoilState(currModuleIdInput);
	const allModulesState = useRecoilValue(allModules);
	const [allModulesTitles, setAllModulesTitles] = useState<any>([]);
	const setCurrModuleDataState = useSetRecoilState(currModuleData);

	const setCurrModuleIndexState = useSetRecoilState(currModuleIndex);
	const setCurrModuleIndexInputState = useSetRecoilState(currModuleIndexInput);
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);

	const [modulesCount, setModulesCount] = useState<any>(null);

	// helpers
	const getModuleIdFromTitle = (title: string) => {
		console.log(title);
		const module = allModulesState.find(
			(module: any) => module.meta.title === title
		) as any;
		return module.id;
	};

	// effects
	useEffect(() => {
		if (allModulesState) {
			setModulesCount(allModulesState.length);
		}
	}, [allModulesState]);

	useEffect(() => {
		if (allModulesState) {
			const titles = allModulesState.map((module: any) => module.meta.title);
			setAllModulesTitles(titles);
		}
	}, [allModulesState]);

	useEffect(() => {
		if (currModuleIdState) {
			const moduleData = allModulesState.find(
				(module: any) => module.id === currModuleIdState
			);
			setCurrModuleDataState(moduleData);
		}
	}, [allModulesState, currModuleIdState, setCurrModuleDataState]);

	// events handlers
	const handleModuleIdChange = (event: any): void => {
		const { value } = event.target;
		console.log(value);
		setCurrModuleIdInputState(Number(value));
	};

	const handleOpenModuleClick = (currInput: any, setter: any): void => {
		setter(currInput);
	};

	const handleClickChip = (title: any): void => {
		const moduleId = getModuleIdFromTitle(title);
		setCurrModuleIdState(moduleId);
		setCurrModuleIdInputState(moduleId);
	};
	return (
		<>
			<StyledInput
				type="number"
				value={Number(currModuleIdInputState)}
				onChange={(e) => handleModuleIdChange(e)}
				theme={theme}
				themeMode={themeMode}
			/>
			<StyledButton
				onClick={() =>
					handleOpenModuleClick(currModuleIdInputState, setCurrModuleIdState)
				}
				theme={theme}
				themeMode={themeMode}
			>
				פתח מודול
			</StyledButton>
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
		</>
	);
}

export default ModulesSearch;
