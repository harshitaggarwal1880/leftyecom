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


.grid {
    display: grid;
    gap: 9rem;
}
  
.grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }
  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }
  .grid-four-column{
     grid-template-columns: 1fr 1.2fr .5fr .8fr ;
  }
  .grid-five-column{
    grid-template-columns: repeat(5, 1fr);
  }
  

`;

export default GlobalStyle;