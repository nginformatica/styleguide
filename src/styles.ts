import { default as styled } from 'styled-components'
import bg from '../assets/bg.png'
import { theme } from 'flipper-ui/theme'

const { neutral } = theme.colors

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 3rem;
    background: url(${bg}) no-repeat center center fixed;
    background-size: cover;
`

export const LogoWrapper = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ImageWrapper = styled.img`
    width: 100%;
`

export const Text = styled.h3`
    color: ${neutral.white};
    font-family: Roboto, Helvetica, Arial, sans-serif;
    letter-spacing: 0.25rem;
    text-align: center;
    margin: 6px 0 0 0;
`

export const WrapperNotification = styled.div`
    height: 200px;
`

export const WrapperButton = styled.button`
    margin: 5px 10px;
    padding: 8px 12px;
    border-radius: 5px;
    border: none;
    background-color: #152849;
    color: #ffffff;
    cursor: pointer;
`
