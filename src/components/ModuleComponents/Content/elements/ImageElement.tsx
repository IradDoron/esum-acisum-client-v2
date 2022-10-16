// import libraries
import React from 'react';
import styled from 'styled-components';

// import constants
import { URLs } from '../../../../recoil/constants';

// types
interface Props {
	content: string[];
}

const StyledVideoContainer = styled.div<any>`
	display: flex;
	justify-content: center;
	align-items: center;
`;

function Image(props: Props) {
	const { content } = props;
	return (
		<StyledVideoContainer>
			<img src={`${URLs.prod}/${content}`} alt="failed to load" />
		</StyledVideoContainer>
	);
}

export default Image;
