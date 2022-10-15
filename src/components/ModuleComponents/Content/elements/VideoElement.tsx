// import types
import { BasicThemeProps } from '../../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import states
import { themeModeState, themeState } from '../../../../recoil/theme';

// styled components
const StyledVideoContainer = styled.div<any>`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const StyledVideo = styled.iframe<BasicThemeProps>`
	width: 100%;
	max-width: 700px;
`;

function Video({ content }: any) {
	// content is the address of the YouTube video
	return (
		<StyledVideoContainer>
			<StyledVideo
				width="1240"
				height="698"
				src={content}
				title="הדגמה לליווי פסנתר בטכניקת השורשים"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></StyledVideo>
		</StyledVideoContainer>
	);
}

export default Video;
