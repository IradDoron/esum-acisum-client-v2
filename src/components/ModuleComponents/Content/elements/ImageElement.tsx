// import libraries
import React from 'react';
import styled from 'styled-components';

// import constants
import { URLs } from '../../../../recoil/constants';

// types
interface Props {
	content: string[];
}

const StyledImageContainer = styled.div<any>`
	display: flex;
	justify-content: center;
	align-items: center;
`;

function Image(props: Props) {
	const { content } = props;
	return (
		<StyledImageContainer>
			<img src={`${URLs.server}/${content}`} alt="failed to load" />
		</StyledImageContainer>
	);
}

export default Image;
