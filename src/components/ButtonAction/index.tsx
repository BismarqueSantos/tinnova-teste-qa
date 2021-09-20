import React from 'react';

import { thisComp } from './types'
import { Container } from './style';

import {Loading} from '../Loading'

export const ButtonAction: React.FC<thisComp> = (props) => {
  const { children, disabled, isLoading, onClick } = props;

  return (
    <Container 
      onClick={disabled ? () => { } : onClick}
      disabled={disabled} 
      isLoading={isLoading} 
    >
      {isLoading ? <Loading/> : children}
    </Container>
  )
}