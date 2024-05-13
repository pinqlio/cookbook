import type { NextPage } from "next";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body { 
        background-color : #ebebeb ; 
        min-height : 100vh;
        padding : 0.5 rem;
        margin-top : 0 ; 
        font-family : Verdana;
    }
`;

const StyledPage: NextPage = () => {
  return (
    <>
      <GlobalStyle />
      <div> This page will be styled with global styles </div>
    </>
  );
};

export default StyledPage;
