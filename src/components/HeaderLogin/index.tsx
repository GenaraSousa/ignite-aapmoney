import logoImg from '../../assets/logoLogin.svg';
import { Container, Content } from './style';
export function HeaderLogin() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="aat. money" />
                <button type="button" onClick={() => { }}>
                    Cadastrar
                </button>
            </Content>
        </Container>
    )
}