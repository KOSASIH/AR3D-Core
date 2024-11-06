import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import LoadingSpinner from './LoadingSpinner';
import ErrorBoundary from './ErrorBoundary';

const Dashboard = () => {
    const { user } = useAuth();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulate an API call to fetch dashboard data
                const response = await fetch('/api/dashboard'); // Replace with your actual API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <div className="error-message">Error: {error}</div>;
    }

    return (
        <ErrorBoundary>
            <div className="dashboard">
                <h2>Welcome, {user ? user.username : 'Guest'}!</h2>
                <div className="dashboard-cards">
                    <div className="card">
                        <h3>Total Assets</h3>
                        <p>{data.totalAssets}</p>
                    </div>
                    <div className="card">
                        <h3>Total Transactions</h3>
                        <p>{data.totalTransactions}</p>
                    </div>
                    <div className="card">
                        <h3>Current Balance</h3>
                        <p>${data.currentBalance.toFixed(2)}</p>
                    </div>
                </div>
                <div className="dashboard-actions">
                    <h3>Quick Actions</h3>
                    <button onClick={() => window.location.href='/assets'}>View Assets</button>
                    <button onClick={() => window.location.href='/transactions'}>New Transaction</button>
                </div>
            </div>
        </ErrorBoundary>
    );
};

export default Dashboard;
