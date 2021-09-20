import React from 'react';
import styled from 'styled-components';

import { List } from './List';
import { Header } from './Header';

const Container = styled.div``;
const minHeight = 40;

export const TableList = ({ config, data }) => {

  const isFunction = (item) => {
    return typeof item === 'function'
  }

  return (
    <Container>
      <Header
        isFunction={isFunction}
        config={config ? config : []}
        height={minHeight} />
      <List
        isFunction={isFunction}
        data={data ? data : []}
        config={config ? config : []}
        height={minHeight} />
    </Container>
  )
}