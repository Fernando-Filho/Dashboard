import { AppContainer, ButtonsContainer, Buttons } from './styleApp'

import Footer from './Components/Footer/Index';

function App() {
  return (
    <AppContainer>
      <ButtonsContainer>
        <Buttons $Red/>
        <Buttons $Yellow/>
        <Buttons $Green/>
      </ButtonsContainer>
    </AppContainer>
  );
}

export default App;
