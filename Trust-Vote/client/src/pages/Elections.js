import React from 'react';
import CandidatesTable from '../CandidatesTable';
import VoteForm from '../VoteForm';
import '../styles/shared.css';

export default function Elections({ state, vote }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="page-section">
                <h1 className="page-title">Current Election</h1>
                
                <div className="space-y-8">
                    {state.candidates.length > 0 ? (
                        <>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <CandidatesTable candidates={state.candidates} />
                            </div>
                            <VoteForm
                                candidates={state.candidates}
                                canVote={state.canVote}
                                onVote={vote}
                            />
                        </>
                    ) : (
                        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <i className="fas fa-exclamation-circle text-red-400"></i>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-red-700">
                                        No candidates available at the moment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
