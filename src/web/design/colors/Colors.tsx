import React from 'react'
import { default as styled } from 'styled-components'

const Wrapper = styled.div``

export const Teste = () => {
    return (
        <Wrapper>
            <div
                style={{
                    width: '100%',
                    height: '50px',
                    backgroundColor: 'red'
                }}
            />
            <div
                style={{
                    width: '100%',
                    height: '50px',
                    backgroundColor: 'pink'
                }}
            />
        </Wrapper>
    )
}
