// import libraries
import React from 'react';
import styled from 'styled-components';

// types and interfaces

interface StyledVideoProps {
	src: string;
	title: string;
	allow: string;
}

// import states

// styled components
const StyledVideoContainer = styled.div<any>`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const StyledVideo = styled.iframe<StyledVideoProps>`
	width: 100%;
	max-width: 700px;
`;

function Video({ content }: any) {
	// content is the address of the YouTube video
	return (
		<StyledVideoContainer>
			<StyledVideo
				src={content}
				title="הדגמה לליווי פסנתר בטכניקת השורשים"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			></StyledVideo>
		</StyledVideoContainer>
	);
}

export default Video;
