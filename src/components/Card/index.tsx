import React from 'react'
import { CardStyled, Bold, Desc } from "./styles"

interface CardProps {
  kind: 'critical' | 'medium' | 'high' | 'minimal' | 'low' | 'good'| 'pink' | 'purple' | 'brown' | 'neutral'
  tag?: string
  children: React.ReactNode
}

export function Card(props: CardProps) {
  return (
      <CardStyled kind={ props.kind }>
        <Bold>{ props.tag }</Bold>
        <Desc>{ `A ${props.kind} situation` }</Desc>
    </CardStyled>
  )
}
    