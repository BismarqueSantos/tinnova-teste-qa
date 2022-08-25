import React from 'react';

import { Container, Header } from './styles';

interface ThisComp {
  children: React.ReactNode;
}

export const Layout: React.FC<ThisComp> = ({ children }) => {
  return (
    <Container>
      <Header>
        <img src="https://tinnova.com.br/wp-content/uploads/2021/05/logo_dark.png" alt="" />
        <h2></h2>
      </Header>
      {children}
    </Container>
  )
}