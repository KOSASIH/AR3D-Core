const API_BASE_URL = '/api'; // Replace with your actual API base URL

// Utility function to handle fetch requests with retries
const fetchWithRetries = async (url, options = {}, retries = 3) => {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            if (i === retries - 1) {
                throw error; // Rethrow the error if it's the last attempt
            }
            console.warn(`Fetch attempt ${i + 1} failed: ${error.message}. Retrying...`);
        }
    }
};

const apiService = {
    async fetchAssets() {
        return await fetchWithRetries(`${API_BASE_URL}/assets`);
    },

    async fetchAssetById(assetId) {
        return await fetchWithRetries(`${API_BASE_URL}/assets/${assetId}`);
    },

    async createAsset(assetData) {
        return await fetchWithRetries(`${API_BASE_URL}/assets`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(assetData),
        });
    },

    async updateAsset(assetId, assetData) {
        return await fetchWithRetries(`${API_BASE_URL}/assets/${assetId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(assetData),
        });
    },

    async deleteAsset(assetId) {
        return await fetchWithRetries(`${API_BASE_URL}/assets/${assetId}`, {
            method: 'DELETE',
        });
    },

    async fetchTransactions() {
        return await fetchWithRetries(`${API_BASE_URL}/transactions`);
    },

    async fetchTransactionById(transactionId) {
        return await fetchWithRetries(`${API_BASE_URL}/transactions/${transactionId}`);
    },

    async createTransaction(transactionData) {
        return await fetchWithRetries(`${API_BASE_URL}/transactions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(transactionData),
        });
    },

    async updateTransaction(transactionId, transactionData) {
        return await fetchWithRetries(`${API_BASE_URL}/transactions/${transactionId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(transactionData),
        });
    },

    async deleteTransaction(transactionId) {
        return await fetchWithRetries(`${API_BASE_URL}/transactions/${transactionId}`, {
            method: 'DELETE',
        });
    },

    async fetchUser Profile(userId) {
        return await fetchWithRetries(`${API_BASE_URL}/users/${userId}`);
    },

    async updateUser Profile(userId, userData) {
        return await fetchWithRetries(`${API_BASE_URL}/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
    },

    // Add more API methods as needed
};

export default apiService;
