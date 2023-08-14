// pages/index.js
import React from 'react';
import Head from 'next/head'
import { useState, useEffect, useRef } from 'react';
import { fetchLeaderboardData } from './utils/api';
import styles from '../styles/leaderboard.module.css';


const ScrollButtonWithLeaderboard = () => {
  const leaderboardRef = useRef(null);
  const [sortedUsers, setSortedUsers] = useState([]);
  const [showLeaderboard, setShowLeaderboard] = useState(false);


  useEffect(() => {
    // Fetch leaderboard data
    const fetchData = async () => {
      const leaderboardData = await fetchLeaderboardData();
      // Sort users by score in descending order
      const sorted = leaderboardData.sort((a, b) => b.score - a.score);
      setSortedUsers(sorted);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Scroll to leaderboard when showLeaderboard is true
    if (showLeaderboard && leaderboardRef.current) {
      leaderboardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showLeaderboard]);

  const toggleLeaderboard = () => {
    setShowLeaderboard((prevShowLeaderboard) => !prevShowLeaderboard);
  };


  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      {/* Button to show/hide leaderboard */}
      <div style={{ fontSize: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <button onClick={toggleLeaderboard}>
            Show Leaderboard
        </button>
      </div>


      {/* Dynamic section with leaderboard data */}
      <div ref={leaderboardRef}>
      {showLeaderboard && (
        <section>
          <h2 style = {{ fontSize: '24px', color: 'white', textAlign: 'center' }}>Leaderboard</h2>
          <table className= 'leaderboardTable'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Score</th>
                <th>Country</th>
                <th>Avatar</th>
              </tr>
            </thead>
            <tbody>
              {sortedUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.score}</td>
                  <td>{user.country}</td>
                  <td>
                      <img
                        src={user.photo} // Assuming the API provides the image URL
                        alt={`Avatar of ${user.name}`}
                        style={{ maxWidth: '50px', maxHeight: '50px' }} // Adjust the image size as needed
                      />
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
      </div>
      

      {/* Add more sections with different styles as needed */}
    </div>
  );
};

export default ScrollButtonWithLeaderboard;