import acai from '/assets/acai.png';

import InformationSection from '../components/InformationSection';
import PreFooter from '../components/PreFooter';
import { AcaiImage } from '../styles/GlobalStyle';

export const Acomp = () => {
  return (
    <>
      <AcaiImage src={acai} alt="açaí" />
      <InformationSection image="/acaiStore/assets/tijela2.jpg" title="ACOMPANHAMENTOS" card={true} />
      <PreFooter height="80vh" title="Complete seu açaí com os melhores acompanhamentos!" />
    </>
  );
};

export default Acomp;
