import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { Container, RadioBox, TransactionTypeContainer } from './style';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const { createTransaction } = useTransactions();

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('deposit');


    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        if (title !== '' && category !== '' && amount !== 0) {
            await createTransaction(
                {
                    title,
                    category,
                    amount,
                    type,
                }
            )
            setAmount(0);
            setCategory('');
            setType('deposit');
            setTitle('');
            onRequestClose();

            Swal.fire({
                title: 'Cadastrado.',
                icon: 'success',
                confirmButtonColor: '#33CC95'
            })

            return;
        }

        Swal.fire({
            title: 'Necessário preencher todos os campos.',
            icon: 'warning',
            confirmButtonColor: '#33CC95'
        })

    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input
                    placeholder="Titulo"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}

                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Tipo de transação: Entradas" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Tipo de transaçào: Saídas" />
                        <span>Saída</span>
                    </RadioBox>

                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}

                />
                <button type="submit"> Cadastrar</button>
            </Container>
        </Modal>
    );
}