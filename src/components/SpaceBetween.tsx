import React from 'react'
import styled from 'styled-components'

const SpaceBetweenStyled = styled.div`
    display: flex;
    justify-content: space-between;
`;

interface SpaceBetweenProps {
    children: React.ReactNode | string;
}

export function SpaceBetween ({ children }:SpaceBetweenProps) {
    return <SpaceBetweenStyled>{children}</SpaceBetweenStyled>;
};