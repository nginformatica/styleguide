import React from "react"
import { SnackbarStyled } from "./styles"

interface SnackbarProps {
  kind: 'error' | 'info' | 'success' | 'warning'
  children?: React.ReactNode
}

export function Snackbar(props: SnackbarProps) {
  return (
    <div style={ { margin: '0 0 2rem 0' } }>
        <h4>{ props.kind }</h4>
        <SnackbarStyled kind={props.kind} message={
            <span>{ props.children }</span>
        }/>
    </div>
  )
}
    