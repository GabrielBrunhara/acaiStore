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
