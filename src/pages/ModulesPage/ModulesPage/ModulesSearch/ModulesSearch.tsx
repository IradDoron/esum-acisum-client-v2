// import types
import { BasicThemeProps } from '../../../../types/styledComponentsInterfaces';

// import states
import { themeModeState, themeState } from '../../../../recoil/theme';
import {
	allModules,
	currModuleData,
	currModuleId,
	currModuleIdInput,
} from '../states';

// import libraries
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

// styled components
const StyledInput = styled.input<InputProps>`
	text-align: center;
	border: none;
	border-radius: 100px;
	max-width: 136px;
	padding-top: ${({ theme }) => theme.spacing.getSpace('xs2')};
	padding-bottom: ${({ theme }) => theme.spacing.getSpace('xs2')};
	margin-right: ${({ theme }) => theme.spacing.getSpace('md')};
	margin-left: ${({ theme }) => theme.spacing.getSpace('md')};
	font-size: ${({ theme }) => theme.typography.getFontSize('md')};
	border-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color1.main.value};

	border-style: solid;
	border-width: 4px;

	&:focus {
		outline: none;
		border-color: ${({ theme, themeMode }) =>
			theme.palette.modes[themeMode].color2.main.value};
	}

	// responsive styles
	${({ theme }) => theme.breakpoints.down('sm')} {
		margin: 0;
		padding-left: ${({ theme }) => theme.spacing.getSpace('xs')};
		padding-right: ${({ theme }) => theme.spacing.getSpace('xs')};
		font-size: ${({ theme }) => theme.typography.getFontSize('xs')};
	}
`;

const StyledButton = styled.button<ButtonProps>`
	background-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color1.main.value};
	color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color1.main.contrast};
	padding-top: ${({ theme }) => theme.spacing.getSpace('xs2')};
	padding-bottom: ${({ theme }) => theme.spacing.getSpace('xs2')};
	padding-left: ${({ theme }) => theme.spacing.getSpace('md')};
	padding-right: ${({ theme }) => theme.spacing.getSpace('md')};
	margin-right: ${({ theme }) => theme.spacing.getSpace('md')};
	margin-left: ${({ theme }) => theme.spacing.getSpace('md')};
	font-size: ${({ theme }) => theme.typography.getFontSize('md')};
	cursor: pointer;
	border: none;
	border-radius: 100px;

	// responsive styles
	${({ theme }) => theme.breakpoints.down('sm')} {
		margin: 0;
		padding-left: ${({ theme }) => theme.spacing.getSpace('xs')};
		padding-right: ${({ theme }) => theme.spacing.getSpace('xs')};
		font-size: ${({ theme }) => theme.typography.getFontSize('xs')};
	}
`;

const StyledIdSearchContainer = styled.div<BasicThemeProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 1000px;
	margin: auto;
	padding-bottom: ${({ theme }) => theme.spacing.getSpace('sm')};

	// responsive styles
	${({ theme }) => theme.breakpoints.down('sm')} {
		justify-content: space-evenly;
	}
`;

const StyledChipsContainer = styled.div<BasicThemeProps>`
	display: flex;
	justify-content: space-around;
	align-items: center;
	max-width: 1000px;
	margin: auto;
`;

const StyledChip = styled.div<ChipProps>`
	width: fit-content;
	text-align: center;
	padding: ${({ theme }) => theme.spacing.getSpace('xs2')};
	border-radius: 50px;
	background-color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color2.main.value};
	color: ${({ theme, themeMode }) =>
		theme.palette.modes[themeMode].color2.main.contrast};
	cursor: pointer;

	// responsive styles
	${({ theme }) => theme.breakpoints.down('sm')} {
		font-size: ${({ theme }) => theme.typography.getFontSize('xs2')};
		margin: ${({ theme }) => theme.spacing.getSpace('xs2')};
	}
`;

const StyledModulesSearchContainer = styled.div<BasicThemeProps>`
	margin-bottom: ${({ theme }) => theme.spacing.getSpace('md')};
	padding-top: ${({ theme }) => theme.spacing.getSpace('sm')};
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
	const [currModuleIdState, setCurrModuleIdState] =
		useRecoilState(currModuleId);
	const [currModuleIdInputState, setCurrModuleIdInputState] =
		useRecoilState<any>(currModuleIdInput);
	const allModulesState = useRecoilValue(allModules);
	const [allModulesTitles, setAllModulesTitles] = useState<any>([]);
	const setCurrModuleDataState = useSetRecoilState(currModuleData);
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);

	const setModulesCount = useState<any>(null)[1];

	// helpers
	const getModuleIdFromTitle = (title: string) => {
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
	}, [allModulesState, setModulesCount]);

	useEffect(() => {
		if (allModulesState) {
			const titles = allModulesState.map((module: any) => module.meta.title);
			setAllModulesTitles(titles);
		}
	}, [allModulesState]);

	useEffect(() => {
		if (currModuleIdState) {
			const moduleData = allModulesState.find(
				(module: any) => module.id === Number(currModuleIdState)
			);
			setCurrModuleDataState(moduleData);
		}
	}, [allModulesState, currModuleIdState, setCurrModuleDataState]);

	// events handlers
	const handleModuleIdChange = (event: any): void => {
		const { value } = event.target;
		setCurrModuleIdInputState(Number(value));
	};

	const handleOpenModuleClick = (currInput: number, setter: any): void => {
		setter(Number(currInput));
	};

	const handleClickChip = (title: any): void => {
		const moduleId = getModuleIdFromTitle(title);
		setCurrModuleIdState(moduleId);
		setCurrModuleIdInputState(moduleId);
	};
	return (
		<StyledModulesSearchContainer theme={theme} themeMode={themeMode}>
			<StyledIdSearchContainer theme={theme} themeMode={themeMode}>
				<StyledInput
					type="text"
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
			</StyledIdSearchContainer>

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
		</StyledModulesSearchContainer>
	);
}

export default ModulesSearch;
