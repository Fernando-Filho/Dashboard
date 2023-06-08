import styled, { css } from 'styled-components'

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 700px;
    width: 400px;
    border-radius: 10rem;
    padding: 10rem;
    background-color: rgb(243 243 243 / 40%);
    backdrop-filter: blur(10px);
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    justify-content: start;
    height: 10px;
    width: 100%;
`
export const Buttons = styled.button`
    height: 10px;
    width: 10px;
    border-radius: 50%;

    ${props => props.$Red && css`
        background-color: red;
    `}

    ${props => props.$Yellow && css`
        background-color: yellow;
    `}

    ${props => props.$Green && css`
        background-color: green;
    `}
`