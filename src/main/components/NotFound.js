import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Optional: Import a CSS file for styling

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>
                You can go back to the <Link to="/">home page</Link> or check out our <Link to="/dashboard">dashboard</Link>.
            </p>
        </div>
    );
};

export default NotFound;
