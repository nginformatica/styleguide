import React from 'react'
import ng from '../../assets/ng.png'
import { ImageWrapper, LogoWrapper, Wrapper, Text } from '../styles'

export const Welcome = () => {
    return (
        <Wrapper>
            <LogoWrapper>
                <ImageWrapper src={ng} />
                <Text>DESIGN SYSTEM</Text>
            </LogoWrapper>
        </Wrapper>
    )
}
