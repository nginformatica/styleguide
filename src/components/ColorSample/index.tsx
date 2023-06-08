import React from "react";
import { theme } from "../../styles"
import { colorStyle, descStyle, tagStyle, wrapperStyle } from "./styles";

const colors = theme.colors

interface ColorSampleProps {
  set: string,
  token: string,
  size: 'small' | 'medium' | 'large'
}
type Pair<T> = [T, T]

const colorBy = ([set, token]: Pair<string | undefined>): string => {
  if(set in colors) {
      const obj = colors[set]
      if (typeof obj === 'string') return obj
      const tokens = token.split('.')
      return tokens.reduce((acc: object, cur: string) => {
          if (cur in acc) {
              return acc[cur]
          }

          return acc
      }, obj)
  }

  return '#000000'
}

export function ColorSample({ set, token, size }: ColorSampleProps) {
  const value = colorBy([set, token])

  return (
      <div style={ wrapperStyle }>
          <div style={ colorStyle(value, size) }></div>
          <div style={ descStyle }>
              <div style={ tagStyle }>{ token ? token : set }</div>
              <div>{ value }</div>
          </div>
      </div>
  )
}