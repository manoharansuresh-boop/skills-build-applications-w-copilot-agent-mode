
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import logo from '../public/octofitapp-small.png';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-primary mb-4 rounded" style={{background: 'linear-gradient(90deg, #007bff 0%, #00c6ff 100%)'}}>
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="Octofit Logo" style={{height: '40px', marginRight: '12px'}} />
            <span className="text-white fw-bold">Octofit Tracker</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link text-warning" to="/activities">Activities</Link></li>
              <li className="nav-item"><Link className="nav-link text-info" to="/leaderboard">Leaderboard</Link></li>
              <li className="nav-item"><Link className="nav-link text-success" to="/teams">Teams</Link></li>
              <li className="nav-item"><Link className="nav-link text-danger" to="/users">Users</Link></li>
              <li className="nav-item"><Link className="nav-link text-primary" to="/workouts">Workouts</Link></li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<div className="mt-5"><h2 className="display-4">Welcome to Octofit Tracker</h2><p className="lead">Select a section from the navigation menu.</p></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
