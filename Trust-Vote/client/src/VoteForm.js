import { useState } from 'react'

export default function VoteForm(props) {
    const [selected, setSelected] = useState(1)

    const handleSubmit = e => {
        e.preventDefault()
        props.onVote(selected)
    }

    const handleSelect = e => {
        setSelected(Number(e.target.value))
    }

    const showVotingDisabledMessage = () => {
        if (!props.canVote) {
            return (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-4">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <i className="fas fa-info-circle text-yellow-400"></i>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-yellow-700">
                                You have already cast your vote.
                            </p>
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    }

    return (
        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="bg-white rounded-lg p-4 mb-8 shadow-md border-2 border-[#4834d4]">
                <h2 className="text-4xl font-extrabold text-black text-center">Cast Your Vote</h2>
            </div>
            {showVotingDisabledMessage()}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="candidate" className="block text-xl font-bold text-black mb-3">
                        Select a Candidate
                    </label>
                    <select 
                        id="candidate"
                        onChange={handleSelect} 
                        value={selected}
                        className="block w-full px-4 py-3 text-lg font-semibold text-black border-2 border-[#4834d4] rounded-lg focus:outline-none focus:border-[#372db3] bg-white"
                        disabled={!props.canVote}
                    >
                        {props.candidates.map(candidate => (
                            <option 
                                key={candidate.id} 
                                value={candidate.id}
                            >
                                {candidate.name}
                            </option>
                        ))}
                    </select>
                </div>
                
                <button 
                    type="submit" 
                    style={{
                        width: '12rem',
                        margin: '1.5rem auto 0',
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '0.5rem 1rem',
                        backgroundColor: '#4834d4',
                        color: 'white',
                        border: 'none',
                        borderRadius: '0.375rem',
                        fontSize: '1rem',
                        fontWeight: '500',
                        cursor: props.canVote ? 'pointer' : 'not-allowed',
                        opacity: props.canVote ? '1' : '0.5',
                        transition: 'background-color 0.15s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#372db3'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4834d4'}
                    disabled={!props.canVote}
                >
                    <i className="fas fa-vote-yea mr-2"></i>
                    Cast Vote
                </button>
            </form>
        </div>
    )
}