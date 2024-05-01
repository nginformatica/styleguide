import React from 'react'
import { Button } from 'flipper-ui'
import { default as styled } from 'styled-components'

const Wrapper = styled.div`
    border: 1px solid blue;
`

export const Teste = () => {
    return (
        <Wrapper>
            <Button color='primary'>Button Componente</Button>
        </Wrapper>
    )
}
