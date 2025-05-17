import React, { useState } from 'react';
import './styles/shared.css';

export default function CandidateRegistration({ contract, account, onCandidateAdded }) {
    const [candidateName, setCandidateName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setSuccess('');

        try {
            // Call the smart contract to add a candidate
            await contract.methods
                .addCandidate(candidateName)
                .send({ from: account });

            setSuccess('Candidate registered successfully!');
            setCandidateName('');
            if (onCandidateAdded) {
                await onCandidateAdded();
            }
        } catch (err) {
            setError(err.message || 'Failed to register candidate');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Register New Candidate</h2>
            
            {error && (
                <div className="alert alert-error">
                    <i className="fas fa-exclamation-circle"></i>
                    <p>{error}</p>
                </div>
            )}

            {success && (
                <div className="alert alert-success">
                    <i className="fas fa-check-circle"></i>
                    <p>{success}</p>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="candidateName">
                        Candidate Name
                    </label>
                    <input
                        type="text"
                        id="candidateName"
                        value={candidateName}
                        onChange={(e) => setCandidateName(e.target.value)}
                        required
                        className="form-input"
                        placeholder="Enter candidate name"
                        disabled={isLoading}
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading || !candidateName.trim()}
                    className="form-button"
                >
                    {isLoading ? (
                        <span>
                            <i className="fas fa-spinner fa-spin"></i>
                            {' '}Registering...
                        </span>
                    ) : (
                        'Register Candidate'
                    )}
                </button>
            </form>
        </div>
    );
}
