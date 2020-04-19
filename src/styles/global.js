import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/bg.jpg';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: url(${background}) no-repeat center;
        background-size: cover;
        background-attachment: fixed;
    }

    body, input, button {
        font: 14px, sans-serif;
    }

    #root {
        max-width: 1120px;
        margin: 0 auto;
        padding-top: 20px;
    }

    button {
        cursor: pointer;
    }

`;