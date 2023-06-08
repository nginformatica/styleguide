import React from 'react'
import { SpaceBetween } from '../SpaceBetween'
import { Bold, CardTagStyled, Desc, Tag } from './styles'

interface CardTagProps {
    kind:
        | 'critical'
        | 'medium'
        | 'high'
        | 'minimal'
        | 'low'
        | 'good'
        | 'pink'
        | 'purple'
        | 'brown'
        | 'neutral'
    tag?: string
}

const tagFromKind = (kind: CardTagProps['kind']) => {
    return kind.charAt(0).toUpperCase() + kind.slice(1)
}

export function CardTag(props: CardTagProps) {
    return (
        <CardTagStyled kind={props.kind}>
            <SpaceBetween>
                <Bold>{props.tag}</Bold>{' '}
                <Tag kind={props.kind}>{tagFromKind(props.kind)}</Tag>
            </SpaceBetween>
            <Desc>{`A ${props.kind} situation`}</Desc>
        </CardTagStyled>
    )
}
