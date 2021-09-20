import styled from 'styled-components';

import { thisCompStyle } from './types'

export const Container = styled.div<thisCompStyle>`
  width: 100%;
  border: 0;
  border-radius: 50px;
  padding: 16px 24px;
  color: ${({ theme }) => theme.palette.primary.inverse};
  text-align: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
  margin-top: 24px;

  cursor: pointer;
  
  &:hover{
    ${({ disabled }) => disabled ? `` : `opacity: 0.75;`};
  }
  
  ${({ disabled, theme }) => disabled ? `
    cursor: not-allowed;
    color: ${theme.palette.disabled.inverse};
    background-color: ${theme.palette.disabled.main};
  ` : ``};
`;