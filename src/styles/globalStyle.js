import styled, { createGlobalStyle, css } from 'styled-components';

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
  ${({ $position }) =>
    $position &&
    css`
      position: ${$position};
      top: 0;
      left: 50%;
      transform: translate(-50%, 180%);
    `}
  color: white;
  filter: drop-shadow(-7px 5px 3px rgba(0, 0, 0, 0.5));
  font-size: 70px;

  @media (max-width: 768px) {
    font-size: 35px;
  }
`;

export const AcaiImage = styled.img`
  transform: translate(50%, 125px);
  right: 50%;
  z-index: 0;
  position: fixed;
  max-height: 80%;
  filter: drop-shadow(0px 0px 50px rgb(255, 255, 255));

  @media (max-width: 768px) {
    max-height: 60%;
  }
`;

export const Content = styled.div`
  position: relative;
  padding: 70px;

  h1 {
    font-weight: 800;
    margin: 0;
    font-size: 2rem;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      border: 4px solid var(--primary);
      border-radius: 20px;
      opacity: 0;
      transition: 0.4s ease-in-out;
    }
    &:hover {
      &::after {
        opacity: 1;
        inset: 20px;
      }
    }

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  h3 {
    font-weight: 700;
    margin: 0;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  p {
    text-align: justify;
    padding: 20px 100px;
    font-size: 18px;

    @media (max-width: 768px) {
      padding: 10px;
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export default GlobalStyle;
