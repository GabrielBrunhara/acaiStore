import P from 'prop-types';

import * as Styled from './style';
import { Content, Title } from '../../styles/GlobalStyle';
import { cards } from './acompData';
import AcompCard from './AcompCard';

const InformationSection = ({ image, title, card }) => {
  return (
    <>
      <Styled.Section $background={'var(--secondary)'} $height={'60vh'}>
        <Styled.Img src={image} />
        <Title $position={'absolute'}>{title}</Title>
        {card && (
          <Styled.CardContent>
            {cards.map((Acomp, index) => (
              <AcompCard key={index} name={Acomp.name} imgLink={Acomp.imgLink} />
            ))}
          </Styled.CardContent>
        )}
        {!card && (
          <>
            <Content>
              <h1>Somos simplismente apaixonados po açaí</h1>
              <p>
                Na nossa loja, a paixão pelo açaí é o que nos move! Cada tigela que preparamos é feita com muito
                carinho, para que você tenha a melhor experiência possível. Trabalhamos com as melhores frutas e
                acompanhamentos, trazendo aquele sabor que todo mundo ama. Estamos no mercado desde 2009, oferecendo
                qualidade e sabor incomparáveis, seja para quem vem curtir o açaí na loja ou para quem prefere levar
                para casa.Além de atender diretamente nossos clientes, também fornecemos para outros estabelecimentos e
                estamos prontos para tornar seu evento ainda mais especial. Seja aniversário, formatura ou evento
                empresarial, garantimos que sua festa será mais gostosa com o nosso açaí!Entre em contato conosco e
                saiba como podemos deixar seu evento mais saboroso. A gente cuida de tudo com o maior cuidado e oferece
                o melhor atendimento, sempre trazendo o açaí mais delicioso da cidade!
              </p>
            </Content>
          </>
        )}
      </Styled.Section>
      {!card && (
        <Styled.Photos>
          <Styled.Img src="/acaiStore/assets/barca.jpg" />
          <Styled.Img src="/acaiStore/assets/tijela.jpg" />
        </Styled.Photos>
      )}
    </>
  );
};

InformationSection.propTypes = {
  image: P.string.isRequired,
  title: P.string.isRequired,
  card: P.bool.isRequired,
};

export default InformationSection;
