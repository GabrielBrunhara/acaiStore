import { useEffect, useState } from 'react';

import acai from '/assets/acai7.png';
import acai2 from '/assets/acai6.png';

import Header from '../components/Header';
import HomeSection from '../components/HomeSection';
import PreFooter from '../components/PreFooter';
import { AcaiImage } from '../styles/GlobalStyle';
export const Home = () => {
  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const height = window.innerHeight;
      const limit = height * 1.5;
      if (window.scrollY > limit) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <AcaiImage src={scrollDown ? acai2 : acai} alt="açaí" />
      <Header scrollDown={scrollDown} />
      <HomeSection
        image="/acaiStore/assets/tijela2.jpg"
        title="AÇAÍ COM SABOR DE LIBERDADE"
        subtitle="Novidade da vez: Delicioso e saudável!"
        text="Aqui o açaí é feito com os melhores ingredientes! Nossa missão é levar até você um açaí fresquinho, feito com frutas naturais e livre de conservantes. Se você busca opções sem lactose ou sem açúcar, temos tudo o que você precisa para matar a vontade sem culpa. Vem provar!"
        reverse={false}
      />
      <HomeSection
        image="/acaiStore/assets/barca.jpg"
        title="NOSSOS EVENTOS"
        subtitle="Açaí, diversão e muito mais!"
        text="Mais do que uma loja, somos um ponto de encontro para todos que amam um bom açaí! Estamos prontos para te receber em nossos eventos e te surpreender com as melhores combinações de açaí. Vem curtir um tempo com a gente, porque aqui o rolê é sempre top!"
        reverse={true}
      />
      <HomeSection
        image="/acaiStore/assets/store.jpg"
        title="SOBRE NÓS"
        subtitle="O melhor açaí da cidade, sempre!"
        text="Nosso açaí é mais que uma sobremesa: é uma experiência! Com anos de dedicação, nós da nossa loja temos orgulho em oferecer a você o melhor açaí da região. Vem para cá e sinta o sabor da qualidade, com um atendimento que só quem entende de açaí pode oferecer!"
        reverse={false}
      />
      <PreFooter title="FIQUE DE OLHO NAS NOSSAS OFERTAS EXCLUSIVAS!" />
    </>
  );
};

export default Home;
