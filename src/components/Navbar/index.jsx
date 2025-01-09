import { useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';

import * as Styled from './style';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const { scrollY } = useScroll();
  const navbarRef = useRef(null);

  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious();
    const direction = current > previous ? 'down' : 'up';
    setIsVisible(direction === 'up');
    if (direction === 'down') {
      setTimeout(() => {
        setIsChecked(false);
      }, 500);
    }
  });

  const handleLinkClick = () => {
    setIsChecked(false);
  };

  return (
    <Styled.Navbar
      ref={navbarRef}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ type: 'tween', duration: 0.5 }}
    >
      <Styled.ListName>
        <Styled.Name>
          <img src={'/acaiStore/assets/logo.png'} alt="logo" width="50" />
          Sua Marca
        </Styled.Name>
      </Styled.ListName>
      <Styled.ToggleMenu>
        <label htmlFor="toggle">{isChecked ? <IoClose size={25} /> : <HiMenuAlt3 size={25} />}</label>
        <input type="checkbox" id="toggle" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
      </Styled.ToggleMenu>
      <Styled.List $isChecked={isChecked}>
        <li>
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/acomp" onClick={handleLinkClick}>
            Acompanhamentos
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handleLinkClick}>
            Sobre Nós
          </Link>
        </li>
      </Styled.List>
    </Styled.Navbar>
  );
};

export default Navbar;
