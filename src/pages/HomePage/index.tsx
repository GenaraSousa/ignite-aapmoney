import { useState } from 'react';
import { Dashboard } from '../../components/Dashboard';
import { Header } from '../../components/Header';
import { NewTransactionModal } from '../../components/NewTransactionModal';
import { TransactionsProvider } from '../../hooks/useTransactions';
import { GlobalStyle } from '../../styles/global';


export function HomePage() {

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModalOpen() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModalOpen() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <TransactionsProvider>
            <Header></Header>

            <Dashboard onOpenNewTransactionModal={handleOpenNewTransactionModalOpen} />
            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModalOpen} />
            <GlobalStyle />
        </TransactionsProvider>
    );
}