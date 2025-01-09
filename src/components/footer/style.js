import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 100px;
  background-color: var(--footer-bg, #333);
  color: var(--footer-text, #fff);
  font-size: 14px;

  @media (max-width: 768px) {
    padding: 20px 40px;
    flex-direction: column;
    align-items: center;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 80px;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 60%;
  font-size: 13px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-inline: 50%;
    width: 100%;
  }
`;

export const InfoSection = styled.div`
  margin-inline: 20px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-top: 20px;
    align-self: center;
  }
`;

export const Icon = styled.a`
  color: var(--footer-text, #fff);
  font-size: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary);
  }

  svg {
    width: 30px;
    height: 30px;

    @media (max-width: 768px) {
      width: 25px;
      height: 25px;
    }
  }
`;

export const Rights = styled.p`
  background-color: var(--footer-bg, #333);
  margin: 0;
  text-align: center;
  padding-bottom: 20px;
  @media (max-width: 768px) {
    align-self: center;
  }
`;
