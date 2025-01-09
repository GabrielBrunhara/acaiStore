import P from 'prop-types';

import { AcaiSection, Title } from '../../styles/GlobalStyle';

function PreFooter({ height = '100vh', title }) {
  return (
    <AcaiSection $background={'var(--primary)'} $height={height}>
      <Title>{title}</Title>
    </AcaiSection>
  );
}

PreFooter.propTypes = {
  height: P.string,
  title: P.string,
};

export default PreFooter;
