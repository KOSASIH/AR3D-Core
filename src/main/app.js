import React, { useState, useEffect, createContext, useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles.css';
import Dashboard from './components/Dashboard';
import AssetViewer from './components/AssetViewer';
import TransactionForm from './components/TransactionForm';
import NotFound from './components/NotFound';
import Login from './components/Login';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';

// Create a context for managing authentication
const AppContext = createContext();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data (e.g., fetching user data)
    const loadData = async () => {
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>AR3D Wallet</h1>
          <nav>
            <ul>
              <li><a href="/">Dashboard</a></li>
              <li><a href="/assets">Assets</a></li>
              <li><a href="/transactions">Transactions</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <ErrorBoundary>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/assets" component={AssetViewer} />
              <Route path="/transactions" component={TransactionForm} />
              <Route path="/login" component={Login} />
              <Route component={NotFound} />
            </Switch>
          </ErrorBoundary>
        </main>
      </div>
    </Router>
  );
};

// Wrap the App component with AuthProvider for authentication context
const WrappedApp = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

ReactDOM.render(<WrappedApp />, document.getElementById('root'));
