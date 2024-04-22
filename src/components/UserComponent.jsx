import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserComponent = () => {
  const [userData, setUserData] = useState(null);

  const UserList = async () => {
    try{
      const response = await axios.get(
          "http://127.0.0.1:5200/users"
        );
        
        return response;
    }catch(error){
      
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserList();
        setUserData(response.data); 
      } catch (error) {
        
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    <h1>User List</h1>
    
    {userData ? (
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #dddddd' }}>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Email</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Password</th>
          </tr>
        </thead>
        <tbody>
          {userData.map(user => (
            <tr key={user.id} style={{ borderBottom: '1px solid #dddddd' }}>
              <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{user.id}</td>
              <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{user.name}</td>
              <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{user.email}</td>
              <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  );
};

export default UserComponent;
