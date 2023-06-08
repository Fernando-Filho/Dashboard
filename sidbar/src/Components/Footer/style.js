import styled from "styled-components";

export const FooterContainer = styled.div`
    transition: .5s;
    display: flex;
    flex-direction: row;
    height: 50px;
    width: 50px;
    border-radius: 25px;
    background-color: #b3b3b3;
    box-shadow: 0 0 20px #b3b3b3;

    &:hover{
        width: 150px;
        border-radius: 25px
    }
`