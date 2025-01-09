import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light dark;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;

    --primary: rgb(132, 32, 182);
    --secondary: white;
    --text: rgb(22, 17, 9);
  }

  body {
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;
    background-color: black;
    font-family: 'Funnel Sans', sans-serif;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: 800;
  }
`;

export const Container = styled.div`
  overflow: hidden;
  background-color: var(--primary);
`;

const BaseSection = styled.div`
  background: transparent;
  justify-content: center;
  min-height: ${({ $height }) => $height};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  color: var(--text);
  margin: 0;
  padding: 0;
  z-index: 0;
`;

export const AcaiSection = styled(BaseSection).attrs({ as: 'section' })``;
export const HeaderSection = styled(BaseSection).attrs({ as: 'header' })``;

export const Title = styled.h1`
  color: white;
  filter: drop-shadow(-7px 5px 1px rgba(0, 0, 0, 0.5));
  font-size: 70px;

  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

export default GlobalStyle;
