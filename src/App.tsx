
import Modal from 'react-modal';
import { SingInPage } from './pages/SingInPage/index';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root')
export function App() {

  return (
    <>
      <SingInPage />
      <GlobalStyle />
    </>
    //<Home />
  );
}


