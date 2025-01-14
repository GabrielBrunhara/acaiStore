import styled from 'styled-components';

export const AcompCard = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
  }
`;

export const Img = styled.div`
  width: 100%;
  height: 70%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProjectName = styled.h3`
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text);
  text-align: center;
  padding: 5px 0;
`;
