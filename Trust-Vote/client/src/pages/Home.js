import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
    return (
        <div>
            <section className="hero">
                <div className="hero-content">
                    <h1>Secure, Transparent, and Trusted Voting</h1>
                    <p>TrustVote provides a modern platform for democratic elections. Our system ensures security, accessibility, and transparency for all voters and candidates.</p>
                    <div>
                        <Link to="/elections" className="btn btn-primary">View Elections</Link>
                    </div>
                </div>
            </section>
            
            <section className="features">
                <div className="feature-card">
                    <div className="feature-icon">
                        <i className="fas fa-lock"></i>
                    </div>
                    <h3>Secure Voting</h3>
                    <p>Advanced encryption and blockchain technology ensure your vote is secure and tamper-proof.</p>
                </div>
                
                <div className="feature-card">
                    <div className="feature-icon">
                        <i className="fas fa-mobile"></i>
                    </div>
                    <h3>Vote Anywhere</h3>
                    <p>Cast your vote securely from your computer or mobile device with MetaMask.</p>
                </div>
                
                <div className="feature-card">
                    <div className="feature-icon">
                        <i className="fas fa-chart-bar"></i>
                    </div>
                    <h3>Real-time Results</h3>
                    <p>View election results instantly as votes are recorded on the blockchain.</p>
                </div>
            </section>
            
            <section className="upcoming-elections">
                <h2>Upcoming Elections</h2>
                <ul className="election-list">
                    <li className="election-item">
                        <div>
                            <h3>City Elections</h3>
                            <span className="election-date">May 15, 2025</span>
                        </div>
                        <Link to="/elections" className="btn btn-secondary">Details</Link>
                    </li>
                    <li className="election-item">
                        <div>
                            <h3>College Election</h3>
                            <span className="election-date">June 8, 2025</span>
                        </div>
                        <Link to="/elections" className="btn btn-secondary">Details</Link>
                    </li>
                    <li className="election-item">
                        <div>
                            <h3>Mayor Election</h3>
                            <span className="election-date">November 3, 2025</span>
                        </div>
                        <Link to="/elections" className="btn btn-secondary">Details</Link>
                    </li>
                </ul>
                <div className="view-all">
                    <Link to="/elections" className="btn btn-primary">View All Elections</Link>
                </div>
            </section>
        </div>
    );
}
