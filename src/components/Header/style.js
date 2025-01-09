import styled from 'styled-components';

export const AcaiImage = styled.img`
  transform: translateY(25px);
  z-index: -1;
  position: fixed;
  max-height: 80%;
  filter: drop-shadow(0px 0px 50px rgb(255, 255, 255));

  @media (max-width: 768px) {
    max-height: 60%;
  }
`;

export default AcaiImage;
