import styled from "styled-components";
import { Theme, WithTheme } from "../../styles";

interface CardTagStyledProps {
  kind: 'critical' | 'medium' | 'high' | 'minimal' | 'low' | 'good'| 'pink' | 'purple' | 'brown' | 'neutral'
  tag?: string
  children: React.ReactNode
}

export const CardTagStyled = styled('div')<WithTheme<CardTagStyledProps>>(
  ({ theme, kind }: WithTheme<CardTagStyledProps>) => ({
      padding: '0.5rem',
      borderLeft: `4px solid ${theme.colors.priority[kind].main}`,
      backgroundColor: 'white',
      width: '216px',
      height: '80px',
      margin: '0 1rem 1rem 0',
      boxShadow: '0 3px 10px #8888',
      borderRadius: '4px'
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

export const Tag = styled('span')<WithTheme<CardTagStyledProps>>(p => ({
  color: p.theme.colors.neutral.white,
  backgroundColor: p.theme.colors.priority[p.kind].main,
  fontSize: '0.65rem',
  padding: '0.125rem 0.25rem',
  borderRadius: '5px'
}))