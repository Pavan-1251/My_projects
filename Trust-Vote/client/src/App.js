import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ElectionContract from "./contracts/Election.json";
import getWeb3 from './getWeb3';
import Home from './pages/Home';
import Elections from './pages/Elections';
import Results from './pages/Results';
import CandidateRegistration from './pages/CandidateRegistration';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [state, setState] = useState({
    web3: null,
    accounts: null,
    contract: null,
    canVote: false,
    candidates: [],
    isAdmin: false,
    adminAddress: null
  })

  const refreshCandidates = async () => {
    if (state.contract) {
      const candidateCount = await state.contract.methods.candidateCount().call()
      let candidates = []
      for (let i = 1; i <= Number(candidateCount); i++) {
        const candidate = await state.contract.methods.candidates(i).call()
        candidates.push(candidate)
      }
      setState(s => ({ ...s, candidates }))
    }
  }

  useEffect(() => {
    (async () => {
      try {
        // Get network provider and web3 instance
        const web3 = await getWeb3()

        // Use web3 to get the user's accounts
        const accounts = await web3.eth.getAccounts()

        // Get the contract instance.
        const networkId = await web3.eth.net.getId()
        const deployedNetwork = ElectionContract.networks[networkId]
        const contract = new web3.eth.Contract(
          ElectionContract.abi,
          deployedNetwork && deployedNetwork.address
        )

        // Fetch candidates
        let candidates = []
        const candidateCount = await contract.methods.candidateCount().call()
        for (let i = 1; i <= Number(candidateCount); i++) {
          const candidate = await contract.methods.candidates(i).call()
          candidates.push(candidate)
        }

        // Check if the current user has voted
        const hasVoted = await contract.methods.voters(accounts[0]).call()

        // Vote event listener
        listenVotes(contract)

        // Check if current user is admin
        const adminAddress = await contract.methods.admin().call();
        const isAdmin = accounts[0].toLowerCase() === adminAddress.toLowerCase();

        // Save all that in the component state
        setState(s => ({ 
          ...s, 
          web3, 
          accounts, 
          contract, 
          candidates, 
          canVote: !hasVoted,
          isAdmin,
          adminAddress
        }))

      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(`Failed to load web3, accounts, or contract. Check console for details.`);
        console.error(error);
      }
    })()
  }, [])

  const vote = async (candidateId) => {
    if (state.web3 && state.contract && state.accounts) {
      await state.contract.methods
        .vote(candidateId)
        .send({ from: state.accounts[0] })
    }
  }

  const listenVotes = async contract => {
    const votedEvent = await contract.events.VotedEvent()
    votedEvent
      // Increment candidate vote
      .on("data", event => {
        const candidateId = event.returnValues.candidateId
        setState(s => ({
          ...s,
          canVote: false,
          candidates: s.candidates.map(
            candidate => candidate.id === candidateId
              ? ({ ...candidate, voteCount: Number(candidate.voteCount) + 1 })
              : candidate
          )
        }))
      })
      .on("error", console.error)
  }

  if (!state.web3 || state.accounts.length === 0) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#E0E0FF' }}>
        <p className="m-auto pb-20">Loading Web3, accounts, and contract...</p>
      </div>
    )
  }

  return (
    <Router>
      <div style={{ backgroundColor: '#E0E0FF', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <header className="header">
          <div className="header-content">
            <div className="logo">TrustVote</div>
            <nav className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/elections">Elections</Link>
              <Link to="/results">Results</Link>
              <Link to="/candidate-registration">Candidate Registration</Link>
            </nav>
          </div>
        </header>

        <main style={{ flex: 1 }}>
          <Route exact path="/" component={Home} />
          <Route 
            path="/elections" 
            render={props => <Elections {...props} state={state} vote={vote} />}
          />
          <Route 
            path="/results" 
            render={props => <Results {...props} state={state} />}
          />
          <Route 
            path="/candidate-registration" 
            render={props => <CandidateRegistration {...props} state={state} onCandidateAdded={refreshCandidates} />}
          />
        </main>

        <footer className="footer">
          <div className="container">
            <p>&copy; 2025 TrustVote System. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;