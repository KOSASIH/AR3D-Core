const API_BASE_URL = '/api/wallet'; // Replace with your actual wallet API base URL
import authService from './authService'; // Import the authService for token management

const walletService = {
    async fetchWallet(userId) {
        const response = await fetch(`${API_BASE_URL}/${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authService.getToken()}`, // Include token in the request
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to fetch wallet');
        }

        return await response.json(); // Return wallet data
    },

    async addFunds(userId, amount) {
        const response = await fetch(`${API_BASE_URL}/${userId}/add-funds`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authService.getToken()}`, // Include token in the request
            },
            body: JSON.stringify({ amount }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to add funds');
        }

        return await response.json(); // Return updated wallet data
    },

    async makeTransaction(transactionData) {
        const response = await fetch(`${API_BASE_URL}/transactions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authService.getToken()}`, // Include token in the request
            },
            body: JSON.stringify(transactionData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Transaction failed');
        }

        return await response.json(); // Return transaction details
    },

    async fetchTransactions(userId) {
        const response = await fetch(`${API_BASE_URL}/${userId}/transactions`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authService.getToken()}`, // Include token in the request
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to fetch transactions');
        }

        return await response.json(); // Return transaction history
    },

    async fetchTransactionById(transactionId) {
        const response = await fetch(`${API_BASE_URL}/transactions/${transactionId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authService.getToken()}`, // Include token in the request
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to fetch transaction');
        }

        return await response.json(); // Return transaction details
    },

    async deleteTransaction(transactionId) {
        const response = await fetch(`${API_BASE_URL}/transactions/${transactionId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${authService.getToken()}`, // Include token in the request
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to delete transaction');
        }

        return await response.json(); // Return success message
    },

    // Add more wallet-related methods as needed
};

export default walletService;
