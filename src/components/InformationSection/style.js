import styled from 'styled-components';

export const Section = styled.div`
  position: relative;
  background: white;
  min-height: ${({ $height }) => $height};
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  text-align: center;
  color: var(--text);
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

export const Img = styled.img`
  object-fit: cover;
  max-height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    max-height: 200px;
  }
`;

export const Content = styled.div`
  position: relative;
  padding: 70px;

  h1 {
    font-weight: 800;
    margin: 0;
    font-size: 2rem;

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
