import styled from "styled-components"
import { Theme, WithTheme } from "../../styles"

interface CardStyledProps {
  kind: 'critical' | 'medium' | 'high' | 'minimal' | 'low' | 'good'| 'pink' | 'purple' | 'brown' | 'neutral'
  tag?: string
  children: React.ReactNode
}

export const CardStyled = styled('div')<WithTheme<CardStyledProps>>(
  ({ theme, kind }: WithTheme<CardStyledProps>) => ({
      padding: '0.5rem',
      borderLeft: `4px solid ${ theme.colors.priority[kind].main}`,
      backgroundColor: theme.colors.priority[kind].light,
      width: '144px',
      height: '80px',
      margin: '0 1rem 1rem 0',
      borderRadius: '4px',
      position: 'relative'
  })
)

export const Bold = styled('div')((p: Theme) => ({
  color: p.theme.colors.primary.main,
  fontWeight: 600
}))

export const Desc = styled('div')((p: Theme) => ({
  color: p.theme.colors.primary.main,
  fontSize: '0.75rem'
}))