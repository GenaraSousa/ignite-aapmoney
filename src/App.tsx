
import Modal from 'react-modal';
import { Home } from './pages/HomePage';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root')
export function App() {

  return (
    <>
      <Home />
      <GlobalStyle />
    </>
  );
}
//<SingInPage />


