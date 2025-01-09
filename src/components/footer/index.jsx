import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

import * as Styled from './style';

function Footer() {
  return (
    <>
      <Styled.FooterContainer>
        <Styled.LogoContainer>
          <img src="/acaiStore/assets/logo.png" alt="Logo" />
        </Styled.LogoContainer>
        <Styled.InfoContainer>
          <Styled.InfoSection>
            <h2>Endereço</h2>
            <p>Rua Exemplo, 123 - Bairro - Cidade, Estado</p>
          </Styled.InfoSection>
          <Styled.InfoSection>
            <h2>Contato</h2>
            <p>Email: contato@empresa.com</p>
            <p>Telefone: (xx) 99999-9999</p>
          </Styled.InfoSection>
          <Styled.InfoSection>
            <h2>Horários</h2>
            <p>Segunda a Sexta: 9h - 18h</p>
            <p>Sábado: 10h - 14h</p>
            <p>Domingo: Fechado</p>
          </Styled.InfoSection>
        </Styled.InfoContainer>
        <Styled.SocialIcons>
          <Styled.Icon href="#" target="_blank">
            <FaWhatsapp />
          </Styled.Icon>
          <Styled.Icon href="#" target="_blank">
            <FaInstagram />
          </Styled.Icon>
        </Styled.SocialIcons>
      </Styled.FooterContainer>
      <Styled.Rights>&copy; 2025 Gabriel Brunhara. All Rights Reserved.</Styled.Rights>
    </>
  );
}

export default Footer;
