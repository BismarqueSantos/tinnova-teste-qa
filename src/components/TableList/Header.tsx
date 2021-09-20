import React from 'react'

import {Col, ContainerRowHeader} from './styles';

export const Header = ({ config, height, isFunction }) => {
  return (
    <ContainerRowHeader height={height}>
      {config.map((item, key) => (
        <Col
          key={key}
          noBorder={item.noBorder}
          style={{
            width: `${item.size ? `${item.size}%` : '100%'}`,
            justifyContent: `${item.center ? 'center' : 'flex-start'}`,
          }}>
          <p>{isFunction(item.label) ? item.label(item) : item.label}</p>
        </Col>
      ))}
    </ContainerRowHeader>
  )
}