import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.bg {
    background-color: ${({ theme }) => theme.colors.bg};
}

`;

export default GlobalStyle;