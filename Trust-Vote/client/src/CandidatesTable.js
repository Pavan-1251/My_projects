export default function CandidatesTable({ candidates }) {

    if (candidates.length === 0) {
        return null
    }

    return (
        <div>
            <h2 className="page-title">Current Candidates</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-[#4834d4]">
                    <thead className="bg-[#4834d4]/10">
                        <tr>
                            <th className="px-6 py-4 text-left text-lg font-black text-black">ID</th>
                            <th className="px-6 py-4 text-left text-lg font-black text-black">Name</th>
                            <th className="px-6 py-4 text-left text-lg font-black text-black">Votes</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#4834d4]/20">
                        {candidates.map(candidate => (
                            <tr key={candidate.id} className="hover:bg-[#4834d4]/5 transition-colors">
                                <td className="px-6 py-4 text-lg font-bold text-black">{candidate.id}</td>
                                <td className="px-6 py-4 text-lg font-bold text-black">{candidate.name}</td>
                                <td className="px-6 py-4 text-lg font-bold text-black">{candidate.voteCount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}