import React from 'react';
import '../styles/shared.css';

export default function Results({ state }) {
    const sortedCandidates = [...state.candidates].sort((a, b) => 
        Number(b.voteCount) - Number(a.voteCount)
    );

    return (
        <div className="container">
            <div className="page-section">
                <h1 className="page-title">Election Results</h1>
                
                <div className="card">
                    {sortedCandidates.length > 0 ? (
                        <div className="results-container">
                            <div className="results-header">
                                <h3>Current Standings</h3>
                                <p className="total-votes">
                                    Total Votes: {sortedCandidates.reduce((sum, candidate) => 
                                        sum + Number(candidate.voteCount), 0
                                    )}
                                </p>
                            </div>
                            
                            <div className="results-list">
                                {sortedCandidates.map((candidate, index) => (
                                    <div key={candidate.id} className="result-item">
                                        <div className="result-rank">#{index + 1}</div>
                                        <div className="result-info">
                                            <h4>{candidate.name}</h4>
                                            <div className="vote-bar-container">
                                                <div 
                                                    className="vote-bar"
                                                    style={{
                                                        width: `${(Number(candidate.voteCount) / Math.max(...sortedCandidates.map(c => Number(c.voteCount)))) * 100}%`
                                                    }}
                                                ></div>
                                            </div>
                                            <p className="vote-count">{candidate.voteCount} votes</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="alert alert-error">
                            <i className="fas fa-exclamation-circle"></i>
                            <p>No candidates available to show results.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
