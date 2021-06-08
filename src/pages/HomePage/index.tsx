import { useState } from 'react';
import { Dashboard } from '../../components/Dashboard';
import { Header } from '../../components/Header';
import { NewTransactionModal } from '../../components/NewTransactionModal';
import { TransactionsProvider } from '../../hooks/useTransactions';
import { GlobalStyle } from '../../styles/global';


export function Home() {

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModalOpen() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModalOpen() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <TransactionsProvider>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModalOpen} ></Header>

            <Dashboard />

            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModalOpen} />
            <GlobalStyle />
        </TransactionsProvider>
    );
}