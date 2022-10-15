// import libraries
import SheetMusic from '@slnsw/react-sheet-music';
import abcjs from 'abcjs';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { v4 } from 'uuid';
// import states
import { themeModeState, themeState } from '../../../../recoil/theme';

type Degree = string;
type Tonic = 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B';
type ScaleType = 'major' | 'minorNatural' | 'minorHarmonic' | 'minorMelodic';

type ChordilonProps = {
	content: any;
	tonic: Tonic;
	scaleType: ScaleType;
};

interface AbcNotationRawChordsProgressions {
	chordsSymbolsProgressions: any; // example: [['C', 'Dm', 'Em', 'F']]
	meter: '4/4' | null;
	baseLength: '1/1' | null;
	baseKey: string | null; // example: 'C'
}

function degreeToChordSymbol(
	degree: Degree,
	tonic: Tonic,
	scaleType: ScaleType
): string {
	const chordsDegrees: any = {
		major: {
			C: {
				I: 'C',
				'I/3rd': 'C/E',
				'I/5th': 'C/G',
				IM7: 'CM7',
				'IMaj7/3rd': 'CM7/E',
				'IMaj7/5th': 'CM7/G',
				'IMaj7/7th': 'CM7/B',
				ii: 'Dm',
				'ii/3rd': 'Dm/F',
				'ii/5th': 'Dm/A',
				ii7: 'Dm7',
				'ii7/3rd': 'Dm7/F',
				'ii7/5th': 'Dm7/A',
				'ii7/7th': 'Dm7/C',
				iii: 'Em',
				'iii/3rd': 'Em/G',
				'iii/5th': 'Em/B',
				iii7: 'Em7',
				'iii7/3rd': 'Em7/G',
				'iii7/5th': 'Em7/B',
				'iii7/7th': 'Em7/D',
				IV: 'F',
				'IV/3rd': 'F/A',
				'IV/5th': 'F/C',
				IVM7: 'FM7',
				'IVM7/3rd': 'FM7/A',
				'IVM7/5th': 'FM7/C',
				'IVM7/7th': 'FM7/E',
				V: 'G',
				'V/3rd': 'G/B',
				'V/5th': 'G/D',
				V7: 'G7',
				'V7/3rd': 'G7/B',
				'V7/5th': 'G7/D',
				'V7/7th': 'G7/F',
				vi: 'Am',
				'vi/3rd': 'Am/C',
				'vi/5th': 'Am/E',
				vi7: 'Am7',
				'vi7/3rd': 'Am7/C',
				'vi7/5th': 'Am7/E',
				'vi7/7th': 'Am7/G',
				viib5: 'Bmb5',
				'viib5/3rd': 'Bmb5/D',
				'viib5/5th': 'Bmb5/F',
				vii7b5: 'Bm7b5',
				'vii7b5/3rd': 'Bm7b5/D',
				'vii7b5/5th': 'Bm7b5/F',
				'vii7b5/7th': 'Bm7b5/A',
			},
		},
	};

	const chordSymbol = chordsDegrees[scaleType][tonic][degree];

	if (chordSymbol) {
		return chordSymbol;
	} else {
		return 'unknown chord';
	}
}

function degreesProgressionToChordSymbolsProgression(
	degreesProgression: Degree[],
	tonic: Tonic,
	scaleType: ScaleType
) {
	const chordSymbolsProgression = degreesProgression.map((degree) => {
		return degreeToChordSymbol(degree, tonic, scaleType);
	});
	return chordSymbolsProgression;
}

function getAbcNotation(data: AbcNotationRawChordsProgressions) {
	const { chordsSymbolsProgressions, meter, baseLength, baseKey } = data;
	const metaData = `
${meter ? `M: ${meter}` : ''}
${baseLength ? `L: ${baseLength}` : ''}
${baseKey ? `K: ${baseKey}` : ''}
`;

	let bodyString = ``;
	if (chordsSymbolsProgressions) {
		chordsSymbolsProgressions.forEach((progression: any) => {
			progression.forEach((chordSymbol: any) => {
				bodyString += `"${chordSymbol}" z |`;
			});
			bodyString += '\n';
		});
	}

	const abcNotation = `${metaData}${bodyString}`;

	return abcNotation;
}

function Chordilon(props: ChordilonProps) {
	const themeMode = useRecoilValue(themeModeState);
	const theme = useRecoilValue(themeState);
	const [chordProgressions, setChordProgressions] = useState<any>([]);
	const [abcAbcNotationRaw, setAbcAbcNotationRaw] = useState<any>(null);
	const [chordSymbolsRaw, setChordSymbolsRaw] = useState<any>([]);
	const [abcNotation, setAbcNotation] = useState<string>('');
	const abcCardId = useState<any>(v4())[0];
	const {
		content: { modeName, progressions },
		tonic,
		scaleType,
	} = props;

	useEffect(() => {
		const url =
			'https://esum-acisum-api.herokuapp.com/chord-progressions/array';

		(async () => {
			try {
				const response = await axios.post(url, { modeName, progressions });
				setChordProgressions(response.data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, [modeName, progressions]);

	useEffect(() => {
		const chordSymbolsProgressions = chordProgressions.map(
			(progression: any) => {
				return degreesProgressionToChordSymbolsProgression(
					progression,
					tonic,
					scaleType
				);
			}
		);
		setChordSymbolsRaw(chordSymbolsProgressions);
	}, [chordProgressions, scaleType, tonic]);

	useEffect(() => {
		const abcNotationRaw = getAbcNotation({
			chordsSymbolsProgressions: chordSymbolsRaw,
			meter: '4/4',
			baseLength: '1/1',
			baseKey: 'C',
		});
		setAbcNotation(abcNotationRaw);
	}, [chordSymbolsRaw]);

	useEffect(() => {
		if (abcNotation && abcCardId) {
			abcjs.renderAbc(abcCardId, abcNotation, {
				responsive: 'resize',
			});
		}
	}, [abcNotation, abcCardId]);

	return <div id={abcCardId}></div>;
}

export default Chordilon;
