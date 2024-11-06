const API_BASE_URL = '/api/auth'; // Replace with your actual authentication API base URL

const TOKEN_KEY = 'authToken'; // Key for storing the token in local storage

const authService = {
    // Store the token in local storage
    setToken(token) {
        localStorage.setItem(TOKEN_KEY, token);
    },

    // Remove the token from local storage
    removeToken() {
        localStorage.removeItem(TOKEN_KEY);
    },

    // Get the token from local storage
    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    },

    // Check if the user is authenticated
    isAuthenticated() {
        return !!this.getToken();
    },

    async login(credentials) {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Login failed');
        }

        const data = await response.json();
        this.setToken(data.token); // Store the token
        return data; // Return user data or token
    },

    async logout() {
        const response = await fetch(`${API_BASE_URL}/logout`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.getToken()}`, // Include token in the request
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Logout failed');
        }

        this.removeToken(); // Remove the token on logout
        return await response.json(); // Return success message
    },

    async register(userData) {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Registration failed');
        }

        const data = await response.json();
        this.setToken(data.token); // Store the token
        return data; // Return user data or token
    },

    async fetchUser Profile() {
        const response = await fetch(`${API_BASE_URL}/profile`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this.getToken()}`, // Include token in the request
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to fetch user profile');
        }

        return await response.json(); // Return user profile data
    },

    async updateUser Profile(userData) {
        const response = await fetch(`${API_BASE_URL}/profile`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.getToken()}`, // Include token in the request
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to update user profile');
        }

        return await response.json(); // Return updated user profile data
    },

    // Add more authentication methods as needed
};

export default authService;
