import P from 'prop-types';

import * as Styled from './style';

const InformationSection = ({ image, title, subtitle, text, reverse }) => {
  return (
    <Styled.Section $background={'var(--secondary)'} $height={'60vh'}>
      {!reverse && <Styled.Img src={image} />}
      <Styled.Content>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <p>{text}</p>
      </Styled.Content>
      {reverse && <Styled.Img src={image} />}
    </Styled.Section>
  );
};

InformationSection.propTypes = {
  image: P.string.isRequired,
  title: P.string.isRequired,
  subtitle: P.string.isRequired,
  text: P.string.isRequired,
  reverse: P.bool.isRequired,
};

export default InformationSection;
