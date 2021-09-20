import React from 'react';

import { Container, ContainerRow, Col, LabelCol } from './styles'

export const List = ({ config, data, height, isFunction }) => {

  return (
    <Container>
      {
        data.map((item, key) => (
          <ContainerRow
            height={height}
            key={key}
          >
            {[...new Array(config.length)].map((i, k) => (
              <Col
                key={k}
                style={{
                  width: `${config[k].size ? `${config[k].size}%` : '100%'}`,
                  justifyContent: `${config[k].center ? 'center' : 'flex-start'}`,
                }}
                noBorder={config[k].noBorder}>
                <>
                  {isFunction(config[k].path)
                    ? (
                      <>
                        <LabelCol> {config[k].label}:</LabelCol>
                        {config[k].path(item)}
                      </>
                    ) : (
                      <p>
                        <LabelCol> {config[k].label}:</LabelCol>
                        {item[config[k].path]}
                      </p>
                    )
                  }
                </>
              </Col>
            ))}
          </ContainerRow >
        ))
      }
    </Container>
  )
}