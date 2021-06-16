
import Modal from 'react-modal';
import { SinUpPage } from './pages/SingUpPage';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root')
export function App() {

  return (
    <>
      <SinUpPage />
      <GlobalStyle />
    </>
  );
}
//<Home />
//<HomePage />


