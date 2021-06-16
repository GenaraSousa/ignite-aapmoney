import { ButtonNewTransaction } from "../../pages/HomePage/styles";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container, ContainerButton } from "./style";

interface DashboardProps {
    onOpenNewTransactionModal: () => void;
}
export function Dashboard({ onOpenNewTransactionModal }: DashboardProps) {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
            <ContainerButton>
                <ButtonNewTransaction onClick={onOpenNewTransactionModal}>Nova transação</ButtonNewTransaction>
            </ContainerButton>
        </Container>
    )
}