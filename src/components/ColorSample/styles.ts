import { CSSProperties } from 'react'
import { theme } from "../../styles"

const colors = theme.colors

interface IProps {
  set: string,
  token: string,
  size: 'small' | 'medium' | 'large'
}

export const wrapperStyle: CSSProperties = {
  margin: '0 2rem 2rem 0',
  boxSizing: 'border-box',
  display: 'inline-block',
  fontFamily: 'Roboto, sans-serif',
  color: colors.app.text.light,
  fontWeight: 500,
  boxShadow: '0px 2px 6px 1px #9995',
  borderRadius: '4px'
}

export const getSize = {
  small: '72px',
  medium: '100px',
  large: '140px'
}

export const colorStyle = (color: string, size: IProps['size'] = 'medium') => ({
  borderRadius: '4px',
  backgroundColor: color,
  width: getSize[size],
  height: getSize[size]
})

export const descStyle = {
  padding: '0.5rem'
}

export const tagStyle = {
  color: colors.app.text.main,
  fontWeight: 600,
  fontSize: '0.75rem',
  marginBottom: '0.25rem'
}