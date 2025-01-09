import P from 'prop-types';

import { HeaderSection, Title } from '../../styles/globalStyle';
import AcaiImage from './style';

import acai from '/assets/acai2.png';
import acai2 from '/assets/acai3.png';

export const Header = ({ scrollDown }) => {
  return (
    <HeaderSection $height={'100vh'}>
      <AcaiImage src={scrollDown ? acai2 : acai} alt="açaí" />
      <Title>AÇAÍ QUE VEM DE CORAÇÃO</Title>
    </HeaderSection>
  );
};

Header.propTypes = {
  scrollDown: P.bool.isRequired,
};

export default Header;
