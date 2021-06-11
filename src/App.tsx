
import Modal from 'react-modal';
import { HomePage } from './pages/HomePage';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root')
export function App() {

  return (
    <>
      <HomePage />
      <GlobalStyle />
    </>
  );
}
//<Home />
//<SingInPage />


