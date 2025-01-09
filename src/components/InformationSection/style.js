import styled from 'styled-components';

export const Section = styled.div`
  position: relative;
  background: white;
  min-height: ${({ $height }) => $height};
  display: flex;
  flex-direction: column;
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
  max-height: 500px;
  width: 100%;

  @media (max-width: 768px) {
    max-height: 200px;
  }
`;

export const CardContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  width: 80%;
  margin: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const Photos = styled.div`
  position: relative;
  background: white;
  height: 50vh;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;
