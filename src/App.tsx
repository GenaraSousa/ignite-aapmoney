
import Modal from 'react-modal';
import { HomePage } from './pages/HomePage';
import { SinUpPage } from './pages/SingUpPage';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root')
export function App() {

  return (
    <>
      {/* <SinUpPage /> */}
      <HomePage />
      <GlobalStyle />
    </>
  );
}
//<Home />
//<HomePage />


