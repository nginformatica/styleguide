import styled from "styled-components"
import SnackbarContent from '@material-ui/core/SnackbarContent'
import { WithTheme } from "../../styles"

interface IFeedback {
  kind: 'error' | 'info' | 'success' | 'warning'
  children?: React.ReactNode
}

export const SnackbarStyled = styled(SnackbarContent)<WithTheme<IFeedback>>(
  (p: WithTheme<IFeedback>) => ({
      backgroundColor: p.theme.colors.feedback[p.kind],
      borderRadius: '4px',
      color: 'white'
  })
)