// import libraries
import styled from 'styled-components';

// import types
import { BasicThemeProps } from '../../../../types/styledComponentsInterfaces';

const StyledModulesSearchContainer = styled.div<BasicThemeProps>`
margin-bottom: ${({ theme }) => theme.spacing.getSpace('md')};
padding-top: ${({ theme }) => theme.spacing.getSpace('sm')};
`;

export default StyledModulesSearchContainer;