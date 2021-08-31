import { Container } from "./components/layout/Container";
import { Footer } from "./components/layout/Footer";
import { Main } from "./components/layout/Main";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Calculator } from "./pages/Calculator";

import './styles/global.css';

export const App: React.FC = () => {

  return (
    <ThemeProvider>
      <Container>
        <Main>
          <Calculator />
        </Main>
        <Footer>
          Challenge by&nbsp;<a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>. 
          Coded by&nbsp;<a href="https://github.com/kennyjsa">Kenny Johnson</a>.
        </Footer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
