import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import ErrorBoundary from './ErrorBoundary';

const AssetViewer = () => {
    const { assetId } = useParams(); // Get the asset ID from the URL parameters
    const [asset, setAsset] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAsset = async () => {
            try {
                const response = await fetch(`/api/assets/${assetId}`); // Replace with your actual API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setAsset(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAsset();
    }, [assetId]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <div className="error-message">Error: {error}</div>;
    }

    return (
        <ErrorBoundary>
            <div className="asset-viewer">
                <h2>{asset.name}</h2>
                <div className="asset-details">
                    <img src={asset.imageUrl} alt={asset.name} className="asset-image" />
                    <div className="asset-info">
                        <h3>Description</h3>
                        <p>{asset.description}</p>
                        <h3>Value</h3>
                        <p>${asset.value.toFixed(2)}</p>
                        <h3>Owner</h3>
                        <p>{asset.owner}</p>
                    </div>
                </div>
                <div className="asset-actions">
                    <button onClick={() => handleEdit(assetId)}>Edit Asset</button>
                    <button onClick={() => handleDelete(assetId)}>Delete Asset</button>
                </div>
            </div>
        </ErrorBoundary>
    );

    function handleEdit(id) {
        // Logic to edit the asset (e.g., redirect to an edit form)
        window.location.href = `/edit-asset/${id}`;
    }

    function handleDelete(id) {
        // Logic to delete the asset (e.g., API call)
        if (window.confirm('Are you sure you want to delete this asset?')) {
            // Call API to delete the asset
            fetch(`/api/assets/${id}`, { method: 'DELETE' })
                .then(response => {
                    if (response.ok) {
                        alert('Asset deleted successfully');
                        window.location.href = '/assets'; // Redirect to assets list
                    } else {
                        throw new Error('Failed to delete asset');
                    }
                })
                .catch(err => {
                    alert(`Error: ${err.message}`);
                });
        }
    }
};

export default AssetViewer;
