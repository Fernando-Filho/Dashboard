import { createGlobalStyle } from "styled-components";

import wallpaper from './Image/wallpaperWind11.jpg'

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap');

    *{
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
        font-family: 'Manrope', sans-serif;
    }

    :root{
        font-size: 6.25%;
        user-select: none;

    }
    body{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        background-image: url(${wallpaper});
        background-position: center;
        background-repeat: no-repeat;
    }
`