// import types
import { BasicThemeProps } from '../../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import states
import { themeModeState, themeState } from '../../../../recoil/theme';

// styled components
import ListItem from './ListItem';

const StyledUnorderedList = styled.ul<BasicThemeProps>`
	
`;

function UnorderedList(props: any) {
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	const { items } = props;
	return (
		<StyledUnorderedList theme={theme} themeMode={themeMode}>
			{items.map((item: any, index: any) => {
				return (
					<ListItem key={index} content={item.content} type={item.type}>
						{item.children}
					</ListItem>
				);
			})}
		</StyledUnorderedList>
	);
}

export default UnorderedList;
