import acai from '/assets/acai4.png';

import InformationSection from '../components/InformationSection';
import PreFooter from '../components/PreFooter';
import { AcaiImage } from '../styles/GlobalStyle';

export const About = () => {
  return (
    <>
      <AcaiImage src={acai} alt="açaí" />
      <InformationSection image="/acaiStore/assets/about.jpg" title="SOBRE NÓS" card={false} />
      <PreFooter height="80vh" title="Da fruta ao sabor, viva a experiência do açaí!" />
    </>
  );
};

export default About;
