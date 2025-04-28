import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UrlCard from './UrlCard';

const Dashboard = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/urls', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setUrls(res.data);
      } catch (err) {
        console.error('Failed to fetch URLs:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchUrls();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Your Shortened URLs</h2>
      {loading ? (
        <p>Loading...</p>
      ) : urls.length === 0 ? (
        <div className="alert alert-info mt-4">
          You don’t have any URLs yet. Let’s shorten your first one!
        </div>
      ) : (
        urls.map(url => <UrlCard key={url.id} urlData={url} />)
      )}
    </div>
  );
};

export default Dashboard;

// useEffect(() => {
//   const fetchUser = async () => {
//     const res = await axios.get('http://localhost:8080/api/auth/me', {
//       headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//     });
//     setUsername(res.data.username);
//   };
//   fetchUser();
// }, []);
