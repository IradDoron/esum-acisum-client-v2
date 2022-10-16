// import comopnents
import Element from '../Element';

// import types
import { BasicThemeProps } from '../../../../types/styledComponentsInterfaces';

// import libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import states
import { themeModeState, themeState } from '../../../../recoil/theme';

// styled components
const StyledListItem = styled.li<BasicThemeProps>``;

function ListItem(props: any) {
	const theme = useRecoilValue(themeState);
	const themeMode = useRecoilValue(themeModeState);
	const { type, content, children } = props.children[0];
	return (
		<StyledListItem theme={theme} themeMode={themeMode}>
			<Element type={type} content={content}>
				{children}
			</Element>
		</StyledListItem>
	);
}

export default ListItem;
