import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Inter', sans-serif;
  }
  body {
    background: #222;
    color: #fff;
  }
`;

export const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 2.5rem;
  padding-bottom: 3rem;

  margin-left: 150px;
  margin-right: 150px;

  @media (max-width: 950px) {
    margin-left: 50px;
    margin-right: 50px;
  }
`;
