import styled from 'styled-components';

import { thisCompStyle } from './types'

export const Container = styled.div<thisCompStyle>`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;
  border-radius: 50px;
  padding: 5px;
  margin-left: 2px;
  margin-right: 2px;
  color: ${({ theme }) => theme.palette.primary.inverse};
  text-align: center;
  background-color: ${({ theme }) => theme.palette.primary.main};

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