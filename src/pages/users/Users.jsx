import React, { useState } from 'react';
import axios from 'axios';

const Users = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userId, setUserId] = useState(null);
  const [message, setMessage] = useState('');

  const searchUser = async () => {
    try {
      const response = await axios.post('http://localhost:8000/search-user', { userEmail });
      setUserId(response.data.userId);
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error searching user:', error);
      setMessage('Error searching user');
    }
  };

  return (
    <div>
      <label>
        Enter user email:
        <input type="text" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
      </label>
      <button onClick={searchUser}>Search User</button>
      {userId && <p>User ID: {userId}</p>}
      <p>{message}</p>
    </div>
  );
};

export default Users;