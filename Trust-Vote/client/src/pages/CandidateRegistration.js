import React from 'react';
import CandidateRegistrationForm from '../CandidateRegistration';
import '../styles/shared.css';

export default function CandidateRegistration({ state, onCandidateAdded }) {
    if (!state.isAdmin) {
        return (
            <div className="container">
                <div className="alert alert-error">
                    <i className="fas fa-exclamation-circle"></i>
                    <p>Only the admin can access the candidate registration page.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="page-section">
                <h1 className="page-title">Candidate Registration</h1>
                <CandidateRegistrationForm 
                    contract={state.contract} 
                    account={state.accounts[0]}
                    onCandidateAdded={onCandidateAdded}
                />
            </div>
        </div>
    );
}
