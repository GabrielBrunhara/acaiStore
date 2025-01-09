import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyle, { Container } from './styles/GlobalStyle';
import Layout from './components/Layout';
import Home from './pages/Home';
import Acomp from './pages/Acomp';
import About from './pages/About';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Router basename="/acaiStore">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/acomp" element={<Acomp />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </Router>
      </Container>
    </>
  );
};

export default App;
