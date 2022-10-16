// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import constants
import { GOLDEN_RATIO } from '../../../../recoil/constants';

// import states
import { themeModeState, themeState } from '../../../../recoil/theme';

// types and interfaces
interface StyledVideoProps {
	src: string;
	title: string;
	allow: string;
	theme: any;
	themeMode: any;
}

// styled components
const StyledVideoContainer = styled.div<any>`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const StyledVideo = styled.iframe<StyledVideoProps>`
	// responsive styles
	${({ theme }) => theme.breakpoints.down('sm')} {
		width: 262px;
		height: calc(262px / ${GOLDEN_RATIO});
	}

	${({ theme }) => theme.breakpoints.between('sm', 'md')} {
		width: 400px;
		height: calc(400px / ${GOLDEN_RATIO});
	}

	${({ theme }) => theme.breakpoints.up('md')} {
		width: 600px;
		height: calc(600px / ${GOLDEN_RATIO});
	}


`;

function Video({ content }: any) {
	// content is the address of the YouTube video
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	return (
		<StyledVideoContainer>
			<StyledVideo
				src={content}
				title="הדגמה לליווי פסנתר בטכניקת השורשים"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
				theme={theme}
				themeMode={themeMode}
			></StyledVideo>
		</StyledVideoContainer>
	);
}

export default Video;
