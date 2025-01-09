import PropTypes from 'prop-types';

import * as Styled from './style';

const AcompCard = ({ name, imgLink }) => {
  return (
    <>
      <Styled.AcompCard>
        <Styled.Img>
          <img src={imgLink} alt={name} />
        </Styled.Img>
        <Styled.ProjectName>{name}</Styled.ProjectName>
      </Styled.AcompCard>
    </>
  );
};

AcompCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgLink: PropTypes.string.isRequired,
};

export default AcompCard;
