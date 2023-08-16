
// components/api.js
const fetchLeaderboardData = async () => {
    try {
      const response = await fetch('https://64743e827de100807b1a84ab.mockapi.io/api/v1/leaderboard/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Fetched data:', data);
      return data;
    } catch (error) {
      console.error('Error fetching leaderboard data:', error);
      return [];
    }
  };
  
  export { fetchLeaderboardData };