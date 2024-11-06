import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import ErrorBoundary from './ErrorBoundary';

const TransactionForm = ({ existingTransaction }) => {
    const history = useHistory();
    const [amount, setAmount] = useState(existingTransaction ? existingTransaction.amount : '');
    const [description, setDescription] = useState(existingTransaction ? existingTransaction.description : '');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const transactionData = {
            amount: parseFloat(amount),
            description,
        };

        try {
            const response = existingTransaction
                ? await fetch(`/api/transactions/${existingTransaction.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(transactionData),
                })
                : await fetch('/api/transactions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(transactionData),
                });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            alert('Transaction saved successfully');
            history.push('/transactions'); // Redirect to transactions list
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ErrorBoundary>
            <div className="transaction-form">
                <h2>{existingTransaction ? 'Edit Transaction' : 'New Transaction'}</h2>
                {loading && <LoadingSpinner />}
                {error && <div className="error-message">Error: {error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="amount">Amount</label>
                        <input
                            type="number"
                            id="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn">
                        {existingTransaction ? 'Update Transaction' : 'Create Transaction'}
                    </button>
                </form>
            </div>
        </ErrorBoundary>
    );
};

export default TransactionForm;
